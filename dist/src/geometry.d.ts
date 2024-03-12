import type { Axis } from "./util";
/**
 * A 2D vector
 */
type Vector2D = {
    x: number;
    y: number;
};
/**
 * Vector constructor
 * @param x x coordinates
 * @param y y coordinates
 * @returns a new vector with the corresponding coordinates
 */
declare function createVector(x: number, y: number): Vector2D;
/**
 * Translates a point according to a translation vector
 * @param origin The origin point
 * @param translation The translation vector
 * @returns The vector that corresponds to the origin point translated along the translation vector
 */
declare function translatePoint(origin: Vector2D, translation: Vector2D): Vector2D;
/**
 * Returns the string representation of the vector
 * @param v the vector
 * @returns the string representation of the vector
 */
declare function vector2DToString(v: Vector2D): string;
/**
 * Computes the distance between 2 vectors
 * @param a a vector
 * @param b another vector
 * @returns the euclidean distance between vector a and b
 */
declare function euclideanDistance(a: Vector2D, b: Vector2D): number;
/**
 * Creates a range*range square of positions centered on the position {0, 0} and filter those positions so that
 * they are in the range of {0, 0} using the given range, and the given distance function.
 * @param range the range in which the positions from the created square are kept and returned
 * @param distanceFunction the function that evaluates the distance between two positions.
 * Its return value is compared to the given range.
 * @returns all the positions that are in the range of the position {0, 0} using the given distance function.
 * The position {0, 0} is included in the result.
 */
declare function getMovementVectorsInRange(range: number, distanceFunction: (a: Vector2D, b: Vector2D) => number): Array<Vector2D>;
/**
 * Returns a Vector2D containing the information of the movement that has to be done in order to move by one step from fromPosition towards the given toPosition.
 * First, the movement is done along the given "firstAxis" parameter.
 * @param fromPosition the initial position, before the movement
 * @param toPosition the position that we want to reach, from the fromPosition
 * @param firstAxis the movement is done along this axis first.
 * @returns a Vector2D containing the information of the movement that has to be done in order to move towards the given toPosition.
 */
declare function movingVector(fromPosition: Vector2D, toPosition: Vector2D, firstAxis?: Axis): Vector2D;
/**
 * Returns an array of positions that constitute a path between two other positions, i.e. that visualy links two other positions.
 * @param fromPosition the starting position and target position for building the path are not included in the returned array
 * @param toPosition the target position for building the path, not included in the returned array
 * @param firstAxis this parameter can be used to define the axis to prioritize for movement when multiple options are available.
 * @returns an array of positions that constitute a path between two other positions, i.e. that visualy links two other positions.
 */
declare function linkingPath(fromPosition: Vector2D, toPosition: Vector2D, firstAxis?: Axis): Array<Vector2D>;
/**
 * Returns an array of positions that constitute a path linking the given positions, i.e. that visualy links the other positions.
 * @param positions two-dimensional array of positions. Positions from each "index" are linked to the positions from the "index - 1" index.
 * the positions given as parameter are not included in the returned array.
 * @param firstAxis this parameter can be used to define the axis to prioritize for movement when multiple options are available.
 * @returns an array of positions that constitute a path linking the given positions, i.e. that visualy links the other positions.
 */
declare function positionsLinking(positions: Array<Array<Vector2D>>, firstAxis?: Axis): Array<Vector2D>;
/**
 * Returns true iff the given vector respects the coordinate constraints given as parameter
 * @param vector the vector that is tested
 * @param xCoord the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @param yCoord the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @returns true iff the given vector respects the coordinate constraints given as parameter
 */
declare function vectorHasCoords(vector: Vector2D, xCoord?: number, yCoord?: number): boolean;
export { translatePoint, vector2DToString, createVector, euclideanDistance, movingVector, linkingPath, vectorHasCoords, getMovementVectorsInRange, positionsLinking };
export type { Vector2D };
