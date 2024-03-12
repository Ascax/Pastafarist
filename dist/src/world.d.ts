import type { Vector2D } from "./utils/geometry";
import type { Axis } from "./utils/other_utils";
import type { Actor } from "./actor";
/**
 * A world. It has a width, a height and keeps track of how many turns
 * has passed.
 */
type World = {
    readonly width: number;
    readonly height: number;
};
/**
 * A world constructor
 * @param width the width of the world
 * @param height The height of the world
 * @returns A world with the given width and height and turns elapsed.
 */
declare function createWorld(width: number, height: number): World;
/**
 * Returns the length of the given Axis in the given World
 * @param world the world from which the Axis length is computed
 * @param axis the axis that we want to know the length
 * @returns the length of the given Axis in the given World
 */
declare function axisLength(world: World, axis: Axis): number;
/**
 * Returns an array of 1 to maxPositions random unique aligned positions
 * @param world the world on which the positions are computed
 * @param minPositions the minimum number of positions inside the returned array
 * @param maxPositions the maximum number of positions inside the returned array
 * @param axis the returned positions can reach each other by a translation along this axis
 * @param lineNumber the coordinate of the returned position on the not-given axis
 * @returns an array of 1 to maxPositions random unique positions, that all have the same coordinate value on the axis that was not given
 */
declare function randomPositionsAlongAxis(world: World, minPositions: number, maxPositions: number, axis: Axis, lineNumber: number): Array<Vector2D>;
/**
 * Returns an array of positions corresponding to the given parameters
 * @param parallelToAxis the returned positions can reach each other by a translation along this axis
 * @param parallelAxisCoords the coordinates, on the parallel axis, of the returned positions
 * @param otherAxislineNumber the coordinate of the returned position on the not-given axis
 * @returns an array of 1 to maxPositions random unique positions, that all have the same coordinate value on the axis that was not given
 */
declare function createPositionsAlongAxis(parallelToAxis: Axis, parallelAxisCoords: Array<number>, otherAxislineNumber: number): Array<Vector2D>;
/**
 * Checks if a position is in a world or not
 * @param world The world
 * @param position A position
 * @returns true iif the position is in world
 */
declare function isPositionInWorld(world: World, position: Vector2D): boolean;
/**
 * Returns the text representation of the world
 * @param world the world
 * @returns the text representation of the world
 */
declare function worldToString(world: World): string;
/**
 * Returns the position of the character representing the content of what is at the position described by the given vector, in the given world
 * @param world the world represented by a string where a character represents the given vector
 * @param vector the vector representing the position, represented as a character in the world string representation
 * @returns the position of the character representing the content of what is at the position described by the given vector, in the given world
 */
declare function vectorToIndexInWorldString(world: World, vector: Vector2D): number;
/**
 * Returns all the positions in the world that are in the range of the given positon, using the given distance function
 * @param range the range, i.e. max distance, in which the returned positions are from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned positions must be
 * @param fromPosition the position from which the returned positions can be reached
 * @returns all the positions in the world that are in the range of the given positon, using the given distance function.
 * fromPosition can be part of those returned positions.
 */
declare function getVectorsInRangeInWorld(range: number, distanceFunction: (a: Vector2D, b: Vector2D) => number, world: World, fromPosition: Vector2D): Array<Vector2D>;
/**
 * Returns all the positions that are in the bounds of the given world
 * @param world the world that constrains the possible returned positions' values
 * @returns all the positions that are in the bounds of the given world
 */
declare function allPositionsInWorld(world: World): Array<Vector2D>;
/**
 * Returns a random position of the world which isn't in the givenPositions
 * @param world the world form which the positions are created and can be returned
 * @param givenPositions the positions that must not be returned
 * @returns a random position of the world which isn't in the givenPositions
 */
declare function getRandomPositionNotInGivenPositions(world: World, givenPositions: Array<Vector2D>): Vector2D | undefined;
/**
 * Returns a random position from the world where not a single actor from the given actors is, and which
 * is in the given range, using the given distance function
 * @param range the range, i.e. max distance, in which the returned position is from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned position must be
 * @param fromPosition the position from which the returned position can be reached
 * @param actors the returned position must respect the condition that not a single actor from this
 * array is on it.
 * @returns a random position from the world where not a single actor from the given actors is, and which
 * is in the given range, using the given distance function
 */
declare function getEmptyCellInRange(world: World, actors: Array<Actor>, fromPosition: Vector2D, range: number, distanceFunction: (a: Vector2D, b: Vector2D) => number): Vector2D | undefined;
export type { World };
export { createWorld, worldToString, isPositionInWorld, vectorToIndexInWorldString, randomPositionsAlongAxis, createPositionsAlongAxis, axisLength, getVectorsInRangeInWorld, allPositionsInWorld, getRandomPositionNotInGivenPositions, getEmptyCellInRange };
