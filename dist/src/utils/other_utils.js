/**
 * Substitutes the i-th character of a string with another string.
 * @param baseString The string to replace the character
 * @param index The index to replace the character
 * @param replacement The replacement string
 * @returns The string with the replaced character
 */
function stringReplaceAt(baseString, index, replacement) {
    return baseString.substring(0, index) + replacement + baseString.substring(index + replacement.length);
}
/**
 * Check with deep equality wether two given objects (or primary types) are equal
 * @param object1 one of the two compared objects
 * @param object2 the other one of the two compared objects
 * @returns true if the two given objects are equal, using deep equality
 */
function isDeepStrictEqual(object1, object2) {
    if (object1 === object2)
        return true;
    if (object1 === undefined || object2 === undefined || !isObject(object1)) {
        return false;
    }
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    if (objKeys1.length !== objKeys2.length)
        return false;
    for (const key of objKeys1) {
        const value1 = object1[key];
        const value2 = object2[key];
        const areObjects = isObject(value1) && isObject(value2);
        if ((areObjects && !isDeepStrictEqual(value1, value2)) ||
            (!areObjects && value1 !== value2)) {
            return false;
        }
    }
    return true;
}
/**
 * Returns true if the tested value's type is Object
 * @param object the tested value
 * @returns true if the tested value's type is Object
 */
function isObject(object) {
    return object !== null && typeof object === "object";
}
/**
 * Returns an axis that is not the given axis
 * @param axis the axis that isn't returned
 */
function otherAxis(axis) {
    switch (axis) {
        case "x":
            return "y";
        case "y":
            return "x";
        default:
            throw new Error("Unknown axis");
    }
}
/**
 * Pure functionnal decorator used to call the given function "func" every "n" call of the decorator,
 * and call the given function "defaultFunc" when "func" isn't called
 * @param func the function that have to be called every n call of the decorator
 * @param defaultFunc the function to call otherwise
 * @param n func is called every n call
 * @param currentN counter, compared to n
 * @returns the new decorator (pure functionnal decorator) and the current returned value (by func or defaultFunc)
 */
function executeFunctionEveryNCall(func, defaultFunc, n, currentN = 0) {
    function executeFunctionEveryNCallClosure(currentNClosure) {
        const nextFunc = !currentNClosure ? func : defaultFunc;
        return [() => executeFunctionEveryNCallClosure((currentNClosure + 1) % n), nextFunc];
    }
    return executeFunctionEveryNCallClosure(currentN);
}
/**
 * Returns true if the given value is not undefined
 * @param value the checked value
 * @returns true if the given value is not undefined
 */
function isNotUndefined(value) {
    return value !== undefined;
}
/**
 * Throws an error if the given value is undefined
 * @param value the checked value
 */
function throwErrorIfUndefined(value) {
    if (!isNotUndefined(value)) {
        throw new Error("unexpected undefined value");
    }
}
export { stringReplaceAt, isDeepStrictEqual, isObject, otherAxis, executeFunctionEveryNCall, throwErrorIfUndefined };
//# sourceMappingURL=other_utils.js.map