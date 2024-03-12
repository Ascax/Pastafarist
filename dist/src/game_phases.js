import { hasOneOfKinds, walkerKeys } from "./actor";
import { translateAndUpdateWaypoint } from "./actor";
import { sum } from "./array_utils";
import { createGoodGuy } from "./actor_creators";
import { getFaithPoints, getMaxFaith, setFaithPoints } from "./props";
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */
function spawnPhase(oldActors, phaseResult) {
    return oldActors.concat(phaseResult
        .filter((returnedActor) => returnedActor !== undefined));
}
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */
function playPhase(oldActors, phaseResult) {
    return oldActors.concat(phaseResult
        .filter((returnedVector) => returnedVector !== undefined)
        .map((vector) => createGoodGuy(vector)));
}
/**
 * The executePhase function for the "temperatureRise" phase.
 * It inflicts "damage" to the Spaghetti Monster, our defense target.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "temperatureRise" phase
 */
function temperatureRisePhase(oldActors, phaseResult) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return oldActors.map((currentActor) => hasOneOfKinds(currentActor, ["spaghettiMonster"]) ?
        setFaithPoints(currentActor, getFaithPoints(currentActor) - sum(phaseResult)) :
        currentActor);
}
/**
 * The executePhase function for the "move" phase.
 * It makes the given actors move along the path generated from the spawners to the spaghettiMonsters
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "move" phase
 */
function movePhase(oldActors, phaseResults) {
    return phaseResults.map((phaseResult, actorIndex) => {
        const newActor = translateAndUpdateWaypoint(oldActors, oldActors[actorIndex], phaseResult);
        return ({ ...newActor,
            actions: { ...newActor.actions, move: newActor.actionGenerators["move"][1] },
            actionGenerators: { ...newActor.actionGenerators, move: newActor.actionGenerators["move"][0]() } });
    });
}
/**
 * Returns the given actor, with its ignorance updated by taking into consideration the spreadConvictionResults
 * @param actor the actor whose ignorance must be updated using the spreadConvictionResults
 * @param actorIndex the index by which the actor is referenced in spreadConvictionResults.impactedActorsIndices
 * @param spreadConvictionResults array of objects containing unique indices referencing the actor to update, and the
 * values by which the ignorance of the actors are impacted
 * @returns the given actor, with its ignorance updated by taking into consideration the spreadConvictionResults
 */
function updateIgnorance(actor, actorIndex, spreadConvictionResults) {
    return setFaithPoints(actor, Math.min(spreadConvictionResults.reduce((ignoranceAcc, spreadIgnoranceResult) => ignoranceAcc + (spreadIgnoranceResult.impactAmounts[spreadIgnoranceResult.impactedActorsIndices.indexOf(actorIndex)] ?? 0), getFaithPoints(actor)), getMaxFaith(actor)));
}
/**
 * The executePhase function for the phase about converting people to a religion.
 * Ignorants can get slowly converted to our holy faith; pastafarism, or they could be comforted in their ignorance...
 * @param oldActors The actors before the phase
 * @param spreadConvictionVectors The results of the phase
 * @returns A proposal for the actors after executing the "convertEnemies" phase
 */
function spreadConvictionPhase(oldActors, spreadConvictionVectors) {
    return oldActors.map((currentActor, actorIndex) => hasOneOfKinds(currentActor, [...walkerKeys, "spaghettiMonster"]) ?
        updateIgnorance(currentActor, actorIndex, spreadConvictionVectors) :
        currentActor);
}
/**
 * The executePhase function for the "enemyFlee" phase.
 * It removes the actors that have decided to not exist anymore.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "enemyFlee" phase
 */
function enemyFleePhase(oldActors, phaseResult) {
    return oldActors.filter((a, i) => !phaseResult[i]);
}
export { spawnPhase, temperatureRisePhase, spreadConvictionPhase, enemyFleePhase, movePhase, playPhase };
//# sourceMappingURL=game_phases.js.map