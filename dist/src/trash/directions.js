/**
 * Returns the opposite direction of the given direction
 * @param direction the direction that is the opposite of the direction that will be returned
 * @returns the opposite direction of the given direction
 */
function oppositeDirection(direction) {
    switch (direction) {
        case 0 /* Direction.East */:
            return 1 /* Direction.West */;
        case 1 /* Direction.West */:
            return 0 /* Direction.East */;
        case 2 /* Direction.North */:
            return 3 /* Direction.South */;
        case 3 /* Direction.South */:
            return 2 /* Direction.North */;
        default:
            throw new Error(`${direction} is not a valid direction`);
    }
}
function randomDirection() {
    return Math.floor(Math.random() * 4 /* Direction.Total */);
}
export { oppositeDirection, randomDirection };
//# sourceMappingURL=directions.js.map