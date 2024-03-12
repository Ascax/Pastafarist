import type { Vector2D } from "./utils/geometry";
import type { Actor, Walker } from "./actor";
/**
 * Actor constructor
 * @param position The position of the created Actor
 * @param actionGenerators The generators of the actions of the created actor
 * @param actions The actions of the created Actor
 * @param kind The kind of the created Actor
 * @param externalProps The data or parameters concerning the created actor
 * @returns A new actor
 */
declare function createActor(position: Actor["position"], actionGenerators: Partial<Actor["actionGenerators"]>, actions: Partial<Actor["actions"]>, kind: Actor["kind"], externalProps?: Actor["externalProps"]): Actor;
/**
 * Constructor for a default "ignorant" actor
 * @param position the position where the ignorant is in the world
 * @param waypointTarget the next position that the ignorant has to reach
 * @param faithPoints the level of faithPoints of the ignorant
 * @returns the created Actor of kind "ignorant"
 */
declare function createIgnorant(position: Vector2D, waypointTarget: Vector2D, faithPoints?: number): Actor;
/**
 * Constructor for a default "ignoranceSpreader" actor
 * @param position the position where the ignoranceSpreader is in the world
 * @param waypointTarget the next position that the ignoranceSpreader has to reach
 * @param faithPoints the level of faithPoints of the ignoranceSpreader
 * @param spreadIgnorancePower this value indicates how much the created "ignoranceSpreader" can increase the faith of the "ignorant" actors
 * in its range
 * @param range the range in which the ignoranceSpreader can affect the ignorants
 * @returns the created Actor of kind "ignoranceSpreader"
 */
declare function createIgnoranceSpreader(position: Vector2D, waypointTarget: Vector2D, faithPoints?: number, spreadIgnorancePower?: number, range?: number): Actor;
/**
 * Generic fonction called to create Actors that can move by themselves during the move Phase.
 * Those Actors are listed in the type {@link Walker}.
 * @param kind the kind of the created Actor
 * @param path the waypoints constraining the path on which the Actor will move
 * @param position the position of the created Actor
 * @param faithPoints the faithPoints of the created Actor
 * @returns the created Actor whose kind is listed in the type {@link Walker}
 */
declare function createWalker(kind: Walker, path: Array<Actor>, position: Vector2D, faithPoints?: number): Actor;
/**
 * Constructor for a default "spawner" actor
 * @param position the position where the spawner is in the world
 * @param spawnProba number in [0, 1] representing the probability during each spawn phase to create a new Actor
 * @returns the created Actor of kind "spawner"
 */
declare function createSpawner(position: Vector2D, spawnProba?: number): Actor;
/**
 * Constructor for a default "ground" actor
 * @param position the position of the ground
 * @param waypointNumber the number indexing the order in which the waypoints have to be reached
 * @returns the created Actor of kind "ground"
 */
declare function createGround(position: Vector2D, waypointNumber?: number): Actor;
/**
 * Constructor for a default "goodGuy" actor
 * @param position the position of the goodGuy
 * @param range the range in which the goodGuy can affect the walkers
 * @param conviction the conviction defines how impacting the goodGuy is on the walkers
 * @returns the created Actor of kind "goodGuy"
 */
declare function createGoodGuy(position: Vector2D, range?: number, conviction?: number): Actor;
/**
 * Constructor for a default "spaghettiMonster" actor
 * @param position the position of the goodGuy
 * @param waypointNumber the number indexing the order in which the waypoints (including the spaghettiMonster) have to be reached
 * @param faithPoints the faith of the spaghettiMonster. The game is lost when its faithPoints reach 0.
 * @returns the created Actor of kind "spaghettiMonster"
 */
declare function createSpaghettiMonster(position: Vector2D, waypointNumber: number, faithPoints?: number): Actor;
/**
 * Constructor for a default "player" actor
 * @param playProba the probability for the player to play, for each play Phase
 * @returns the created Actor of kind "player"
 */
declare function createPlayer(playProba?: number): Actor;
export { createActor, createGround, createSpaghettiMonster, createSpawner, createIgnoranceSpreader, createWalker, createIgnorant, createPlayer, createGoodGuy };
