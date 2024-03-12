import { getRandomPositionNotInGivenPositions, getEmptyCellInRange } from "./world";
import { isDeepStrictEqual, otherAxis } from "./utils/other_utils";
import { randomUniqueMinIntegers } from "./utils/number_utils";
import { arrayWithoutElementAtIndex } from "./utils/array_utils";
import { createWalker } from "./actor_creators";
import { euclideanDistance, createVector, movingVector } from "./utils/geometry";
import { getConviction, getWaypointTarget, getRange, getSpawnProba, getSpreadIgnorancePower, getFaithPoints, getPlayProba } from "./props";
import { filterActorsByPosition, filterByKinds, hasOneOfKinds, walkerKeys, kindKeys } from "./actor";
import { axisLength } from "./world";
/**
 * Creates a default action generator for the given action.
 * @param action the action we want to decorate to create a generator returning functions to use after the use of the given function
 * @returns an action generator that will always return the same generator and the same action as the given action
 */
function createDefaultActionGenerator(action) {
    return [() => createDefaultActionGenerator(action), action];
}
/**
 * All the default actions, so that each Phase can be called on each actor, even if the actor hasn't its specific phase function
 */
const defaultActions = {
    spawn: (params) => undefined,
    temperatureRise: (params) => 0,
    spreadIgnorance: (params) => { return { impactedActorsIndices: [], impactAmounts: [] }; },
    convertEnemies: (params) => { return { impactedActorsIndices: [], impactAmounts: [] }; },
    enemyFlee: (params) => false,
    move: (params) => { return createVector(0, 0); },
    play: (params) => undefined
};
/**
 * The "spawner" action.
 * It has a 50% chance to spawn a new actor, which has 70% chance to be an ignorant, or 30% chance to be an ignoranceSpreader.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns A new actor to be spawned
 */
function spawn(params) {
    if (Math.random() < getSpawnProba(params.actingActor)) {
        if (Math.random() < 0.7)
            return createWalker("ignorant", params.actorsAcc, params.actingActor.position);
        else
            return createWalker("ignoranceSpreader", params.actorsAcc, params.actingActor.position);
    }
    return undefined;
}
/**
 * The "temperatureRise" action.
 * It returns the damage done to the spaghetti monster. The actor only does damage if it's on the same
 * position as the spaghetti monster
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns The amount of damage to do to the spaghetti monster
 */
function temperatureRise(params) {
    return params.actorsAcc.find((a) => hasOneOfKinds(a, ["spaghettiMonster"]) && isDeepStrictEqual(a.position, params.actingActor.position))
        === undefined ? 0 : getConviction(params.actingActor);
}
/**
 * Filter the actors whose faith must be impacted (positively or negatively) and return an object containing their indices and how much their faith is impacted
 * @param actors the actors from which the impacted actors are filtered
 * @param actingActor the actor that is impacting the faith of the other actors
 * @param impactedKinds the kinds of the actors that can be impacted by the actingActor
 * @param impactFunction the function defining the value by which the faith of the actors is impacted
 * @returns an object containing:
 * - the indices, in the given actors, of the impacted actors
 * - the values corresponding to how much the faithPoints of the impacted actors are impacted
 */
function impactActorsConviction(actors, actingActor, impactedKinds, impactFunction) {
    const impactedActorsIndices = actors.reduce((acc, currentActor, actorIndex) => hasOneOfKinds(currentActor, impactedKinds) && euclideanDistance(currentActor.position, actingActor.position) <= getRange(actingActor) ?
        acc.concat(actorIndex) :
        acc, []);
    const impactAmounts = impactFunction(actingActor, impactedActorsIndices.map((i) => actors[i]));
    return { impactedActorsIndices, impactAmounts };
}
/**
 * The "spreadIgnorance" action.
 * It returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 */
function spreadIgnorance(params) {
    return impactActorsConviction(params.actorsAcc, params.actingActor, ["ignorant"], (impactingActor, actorsToImpact) => Array.from({ length: actorsToImpact.length }, (_) => getSpreadIgnorancePower(impactingActor)));
}
/**
 * The "convertEnemies" action.
 * It returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 */
function convertEnemies(params) {
    return impactActorsConviction(params.actorsAcc, params.actingActor, [...walkerKeys], (impactingActor, actorsToImpact) => Array.from({ length: actorsToImpact.length }, (_) => -1 * getConviction(impactingActor)));
}
/**
 * A "move" action
 * Returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 */
function moveTowardWaypointTarget(params) {
    return movingVector(params.actingActor.position, getWaypointTarget(params.actingActor), otherAxis(params.spawnersAxis));
}
/**
 * The "enemyFlee" action.
 * It returns whether the actor will decide to not exist or not.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns true iif the current actor decides to not exist anymore
 */
function enemyFlee(params) {
    return hasOneOfKinds(params.actingActor, [...walkerKeys, "spaghettiMonster"]) ? getFaithPoints(params.actingActor) <= 0 : false;
}
/**
 * Can be used for inside "play" actions
 * Returns a good positions, or undefined if no good position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or undefined if no good position avaible
 */
function playPriorityAroundLoneGrounds(params, range, distanceFunction) {
    const numberOfLines = axisLength(params.world, otherAxis(params.spawnersAxis));
    const consideredLineOrder = randomUniqueMinIntegers(numberOfLines, numberOfLines, 0, numberOfLines);
    const groundListPerLine = consideredLineOrder.map((consideredLine) => filterByKinds(params.spawnersAxis === "x" ?
        filterActorsByPosition(params.actorsAcc, undefined, consideredLine) :
        filterActorsByPosition(params.actorsAcc, consideredLine, undefined), ["ground", "spawner", "spaghettiMonster"]));
    const returnedGroundAroundWhichToPlay = Array.from({ length: axisLength(params.world, params.spawnersAxis) - 1 }, (_, i) => i + 1)
        .reduce((acc, groundListPerLineConstraint) => {
        if (acc)
            return acc;
        return groundListPerLine.reduce((acc2, currentGrounds) => {
            if (acc2)
                return acc2;
            if (currentGrounds.length === groundListPerLineConstraint) {
                const actorsWithoutPlayers = params.actorsAcc.filter((a) => !hasOneOfKinds(a, ["player"]));
                const groundAroundWhichToPlay = currentGrounds
                    .find((currentGround) => getEmptyCellInRange(params.world, actorsWithoutPlayers, currentGround.position, range, distanceFunction));
                return groundAroundWhichToPlay;
            }
            return acc2;
        }, undefined);
    }, undefined);
    return returnedGroundAroundWhichToPlay ?
        getEmptyCellInRange(params.world, params.actorsAcc, returnedGroundAroundWhichToPlay.position, range, euclideanDistance) :
        undefined;
}
/**
 * A "play" action
 * Returns a random valid position for the play action
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a random valid position for the play action, or undefined if no positions avaible
 */
function playRandomValid(params) {
    return getRandomPositionNotInGivenPositions(params.world, filterByKinds(params.actorsAcc, arrayWithoutElementAtIndex([...kindKeys], [...kindKeys].indexOf("player"))).map((a) => a.position));
}
/**
 * A "play" action
 * Returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 */
function play(params) {
    if (Math.random() > getPlayProba(params.actingActor))
        return undefined;
    const range = 2;
    const distanceFunction = euclideanDistance;
    return playPriorityAroundLoneGrounds(params, range, distanceFunction) ??
        playRandomValid(params);
}
export { temperatureRise, spreadIgnorance, convertEnemies, enemyFlee, spawn, moveTowardWaypointTarget, defaultActions, play, impactActorsConviction, createDefaultActionGenerator, playPriorityAroundLoneGrounds };
//# sourceMappingURL=actor_actions.js.map