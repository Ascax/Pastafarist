import type { World } from "./world";
import type { Phase } from "./phase";
import { Actor } from "./actor";
import type { Axis } from "./utils/other_utils";
/**
 * Initializes a new world to the given width and height where 0 turns
 * have elapsed.
 * @param width the width
 * @param height the height
 * @returns A brand new world where 0 turns have elapsed
 */
declare function initWorld(width: number, height: number): World;
/**
 * @returns The array of phases
 */
declare function initPhases(): Array<Phase>;
/**
 * Randomly initializes spawners
 * @param world the world where the spawners are created
 * @param minSpawners the minimum number of returned spawners
 * @param maxSpawners the maximum number of returned spawners
 * @param spawnersParallelAxis the returned spawners can reach each other by a translation along this axis
 * @param spawnerLineNumber the coordinate of the returned position on the not-given axis
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns an array of 1 to maxSpawners spawners with unique positions, that all have the same coordinate value on the axis that was not given
 * and that have the same probability of making someone spawn per spawn phase.
 */
declare function initSpawners(world: World, minSpawners: number, maxSpawners: number, spawnersParallelAxis: Axis, spawnerLineNumber: number, averageSpawnsPerPhase?: number): Array<Actor>;
/**
 * Randomly initializes grounds
 * @param world the world where the grounds are created
 * @param minGroundsPerLine the minimum number of created grounds per line along the groundsAxis
 * @param maxGroundsPerLine the maximum number of created grounds per line along the groundsAxis
 * @param groundsAxis the returned grounds can reach each other by a translation along this axis
 * @param groundLineNumbers the coordinates of the returned positions on the not-given axis (for each line where ground are created)
 * @param numberOfGroundLines The number of lines of grounds (in groundsAxis direction) where grounds are created
 * @returns an array of numberOfGroundLines to maxGroundsPerLine * numberOfGroundLines grounds with unique positions
 */
declare function initGroundWaypoints(world: World, minGroundsPerLine: number, maxGroundsPerLine: number, groundsAxis: Axis, groundLineNumbers: Array<number>, numberOfGroundLines: number): Array<Array<Actor>>;
/**
 * Initializes the actors. Should be used at the beginning of the game
 * @param world the world where the actors are created
 * @param intermediateWaypointLinesNumber the number of waypoints that the actors need to cross between the spawners and the spaghettiMonsters
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns the first actors of the game.
 */
declare function initActors(world: World, intermediateWaypointLinesNumber: number, spawnersAxis: Axis, averageSpawnsPerPhase?: number, playProba?: number, minSpawners?: number, maxSpawners?: number): Array<Actor>;
/**
 * Computes the next turn of a world according to its phases and actors.
 * @param phases The phases
 * @param world The world
 * @param actors The actors
 * @param spawnersAxis The axis that is parallel to the line that links the spawners
 * @returns A new array of actors
 */
declare function nextTurn(phases: Array<Phase>, world: World, actors: Array<Actor>, spawnersAxis: Axis): Array<Actor>;
/**
 * A function that plays the game and displays its state at every turn.
 * @param display The display function that displays a world and its actors
 */
declare function playGame(display: (world: World, actors: Array<Actor>) => void): void;
export { playGame, initWorld, initPhases, initActors, initSpawners, nextTurn, initGroundWaypoints };
