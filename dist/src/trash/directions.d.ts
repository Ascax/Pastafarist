declare const enum Direction {
    East = 0,
    West = 1,
    North = 2,
    South = 3,
    Total = 4
}
/**
 * Returns the opposite direction of the given direction
 * @param direction the direction that is the opposite of the direction that will be returned
 * @returns the opposite direction of the given direction
 */
declare function oppositeDirection(direction: Direction): Direction;
declare function randomDirection(): Direction;
export { Direction, oppositeDirection, randomDirection };
