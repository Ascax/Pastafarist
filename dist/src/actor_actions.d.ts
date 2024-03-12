import type { Actor, Kind } from "./actor";
import type { Vector2D } from "./utils/geometry";
import type { Axis } from "./utils/other_utils";
import type { World } from "./world";
/**
 * uniform parameters that the actions must have.
 *
 * actorsAcc: All the actors that the action can take into consideration
 * actingActor: The actor doing the action
 * world: The world on which the action takes place
 * spawnerAxis: The axis along which the spawners were created on the world
 */
type ActorActionParams = {
    actorsAcc: Array<Actor>;
    actingActor: Actor;
    world: World;
    spawnersAxis: Axis;
};
/**
 * All the possibles actions for an actor. These actions are called during the phases of the game.
 */
type ActorActions = {
    spawn: (params: ActorActionParams) => Actor | undefined;
    temperatureRise: (params: ActorActionParams) => number;
    convertEnemies: (params: ActorActionParams) => ReturnType<typeof impactActorsConviction>;
    spreadIgnorance: (params: ActorActionParams) => ReturnType<typeof impactActorsConviction>;
    enemyFlee: (params: ActorActionParams) => boolean;
    move: (params: ActorActionParams) => Vector2D;
    play: (params: ActorActionParams) => Vector2D | undefined;
};
/**
 * Contains the signatures that the action generators of the Actors must respect
 */
type ActionGenerators = {
    [Key in keyof ActorActions]: [() => ActionGenerators[Key], ActorActions[Key]];
};
/**
 * Creates a default action generator for the given action.
 * @param action the action we want to decorate to create a generator returning functions to use after the use of the given function
 * @returns an action generator that will always return the same generator and the same action as the given action
 */
declare function createDefaultActionGenerator<Key extends keyof ActorActions>(action: ActorActions[Key]): ActionGenerators[Key];
/**
 * All the default actions, so that each Phase can be called on each actor, even if the actor hasn't its specific phase function
 */
declare const defaultActions: ActorActions;
/**
 * The "spawner" action.
 * It has a 50% chance to spawn a new actor, which has 70% chance to be an ignorant, or 30% chance to be an ignoranceSpreader.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns A new actor to be spawned
 */
declare function spawn(params: ActorActionParams): ReturnType<ActorActions["spawn"]>;
/**
 * The "temperatureRise" action.
 * It returns the damage done to the spaghetti monster. The actor only does damage if it's on the same
 * position as the spaghetti monster
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns The amount of damage to do to the spaghetti monster
 */
declare function temperatureRise(params: ActorActionParams): ReturnType<ActorActions["temperatureRise"]>;
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
declare function impactActorsConviction(actors: Array<Actor>, actingActor: Actor, impactedKinds: Array<Kind>, impactFunction: (impactingActor: Actor, actorsToImpact: Array<Actor>) => Array<number>): {
    impactedActorsIndices: Array<number>;
    impactAmounts: Array<number>;
};
/**
 * The "spreadIgnorance" action.
 * It returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 */
declare function spreadIgnorance(params: ActorActionParams): ReturnType<ActorActions["spreadIgnorance"]>;
/**
 * The "convertEnemies" action.
 * It returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 */
declare function convertEnemies(params: ActorActionParams): ReturnType<ActorActions["convertEnemies"]>;
/**
 * A "move" action
 * Returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 */
declare function moveTowardWaypointTarget(params: ActorActionParams): ReturnType<ActorActions["move"]>;
/**
 * The "enemyFlee" action.
 * It returns whether the actor will decide to not exist or not.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns true iif the current actor decides to not exist anymore
 */
declare function enemyFlee(params: ActorActionParams): ReturnType<ActorActions["enemyFlee"]>;
/**
 * Can be used for inside "play" actions
 * Returns a good positions, or undefined if no good position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or undefined if no good position avaible
 */
declare function playPriorityAroundLoneGrounds(params: ActorActionParams, range: number, distanceFunction: (a: Vector2D, b: Vector2D) => number): Vector2D | undefined;
/**
 * A "play" action
 * Returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 */
declare function play(params: ActorActionParams): ReturnType<ActorActions["play"]>;
export type { ActorActions, ActionGenerators, ActorActionParams };
export { temperatureRise, spreadIgnorance, convertEnemies, enemyFlee, spawn, moveTowardWaypointTarget, defaultActions, play, impactActorsConviction, createDefaultActionGenerator, playPriorityAroundLoneGrounds };
