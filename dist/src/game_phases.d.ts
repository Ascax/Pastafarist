import type { ActorActions } from "./actor_actions";
import { Actor } from "./actor";
import { impactActorsConviction } from "./actor_actions";
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */
declare function spawnPhase(oldActors: Array<Actor>, phaseResult: Array<ReturnType<ActorActions["spawn"]>>): Array<Actor>;
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */
declare function playPhase(oldActors: Array<Actor>, phaseResult: Array<ReturnType<ActorActions["play"]>>): Array<Actor>;
/**
 * The executePhase function for the "temperatureRise" phase.
 * It inflicts "damage" to the Spaghetti Monster, our defense target.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "temperatureRise" phase
 */
declare function temperatureRisePhase(oldActors: Array<Actor>, phaseResult: Array<ReturnType<ActorActions["temperatureRise"]>>): Array<Actor>;
/**
 * The executePhase function for the "move" phase.
 * It makes the given actors move along the path generated from the spawners to the spaghettiMonsters
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "move" phase
 */
declare function movePhase(oldActors: Array<Actor>, phaseResults: Array<ReturnType<ActorActions["move"]>>): Array<Actor>;
/**
 * The executePhase function for the phase about converting people to a religion.
 * Ignorants can get slowly converted to our holy faith; pastafarism, or they could be comforted in their ignorance...
 * @param oldActors The actors before the phase
 * @param spreadConvictionVectors The results of the phase
 * @returns A proposal for the actors after executing the "convertEnemies" phase
 */
declare function spreadConvictionPhase(oldActors: Array<Actor>, spreadConvictionVectors: Array<ReturnType<typeof impactActorsConviction>>): Array<Actor>;
/**
 * The executePhase function for the "enemyFlee" phase.
 * It removes the actors that have decided to not exist anymore.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "enemyFlee" phase
 */
declare function enemyFleePhase(oldActors: Array<Actor>, phaseResult: Array<ReturnType<ActorActions["enemyFlee"]>>): Array<Actor>;
export { spawnPhase, temperatureRisePhase, spreadConvictionPhase, enemyFleePhase, movePhase, playPhase };
