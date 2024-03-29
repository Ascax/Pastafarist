import { fisherYatesShuffle } from "./array_utils";
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
 * Return numberOfValues evenly-spaced numbers between fromValue and toValue (evenly-spaced to the bounds as well).
 * For example, 2 evenly-spaced numbers between 0 and 10 would be 3.333 and 6.666 because the steps are the same between 0, 3.333, 6.666, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @param mapFn an optional function to map the results
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */
function evenlySpacedNumbers(numberOfValues, fromValue, toValue, mapFn = (x) => x) {
    const [min, max, indexingFunction] = fromValue < toValue ?
        [fromValue, toValue, index => (index + 1)]
        : [toValue, fromValue, index => (numberOfValues - index)];
    return Array.from({ length: numberOfValues }, (_, index) => mapFn(indexingFunction(index) * (max - min) / (numberOfValues + 1) + min));
}
/**
 * Return numberOfValues almost-evenly-spaced integers (step values differ at most by 1) between fromValue and toValue (almost-evenly-spaced to the bounds as well).
 * For example, 2 almost-evenly-spaced integers between 0 and 10 would be 3 and 6 because the steps are almost the same between 0, 3, 6, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */
function almostEvenlySpacedIntegers(numberOfValues, fromValue, toValue) {
    return evenlySpacedNumbers(numberOfValues, fromValue, toValue, Math.floor);
}
/**
 * Returns a random integer x such as minValue <= x < maxValue
 * @param minValue the minimum value that the returned integer can take
 * @param maxValue the (maximum + 1) value that the returned integer can take
 * @returns random integer x such as minValue <= x < maxValue
 */
function randomInteger(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}
/**
 * Returns a random integer in [minValue, maxValue) and that is not present in the given "existingIntegers"
 * @param minValue the minimum value that the returned integer can take
 * @param maxValue the (maximum + 1) value that the returned integer can take
 * @param existingIntegers the returned integer must not already be present in this array
 * @returns a random integer in the given bounds and that is not present in the given "existingIntegers"
 */
function randomUniqueInteger(minValue, maxValue, existingIntegers) {
    let randInt = randomInteger(minValue, maxValue);
    while (existingIntegers.find((currentInt) => randInt === currentInt)) {
        randInt = randomInteger(minValue, maxValue);
    }
    return randInt;
}
/**
 * Randomly returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 * @param minNumberOfValues the minimum number of returned values
 * @param maxNumberOfValues the maximum number of returned values
 * @param minValue the minimum value that a returned value can take
 * @param maxValue the (maximum + 1) value that a returned value can take
 * @returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 */
function randomUniqueIntegers(minNumberOfValues, maxNumberOfValues, minValue, maxValue) {
    if (maxValue - minValue < maxNumberOfValues) {
        throw new Error("It is impossible to return more than n unique values among among n values.");
    }
    if (minNumberOfValues > maxNumberOfValues || minValue > maxValue) {
        throw new Error("Params starting with 'min' must be inferior to their counterpart starting with 'max'");
    }
    function randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues, existingIntegers) {
        if (!maxNumberOfValues) {
            return existingIntegers;
        }
        if (maxNumberOfValues === minNumberOfValues || Math.random() < 0.5) {
            return randomUniqueIntegersTailRecursive(minNumberOfValues - 1, maxNumberOfValues - 1, existingIntegers
                .concat(randomUniqueInteger(minValue, maxValue, existingIntegers)));
        }
        else {
            return randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues - 1, existingIntegers);
        }
    }
    return randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues, []);
}
/**
 * This function terminates, not {@link randomUniqueIntegers}.
 * Randomly returns minNumberOfValues to maxNumberOfValues (included) randomly sorted unique integers (no repetition) whose values are in [minValue, maxValue)
 * and that contain all the lowest values that can possibly be returned.
 * @param minNumberOfValues the minimum number of returned values
 * @param maxNumberOfValues the maximum number of returned values
 * @param minValue the minimum value that a returned value can take
 * @param maxValue the (maximum + 1) value that a returned value can take
 * @returns minNumberOfValues to maxNumberOfValues (included) randomly sorted unique integers (no repetition) whose values are in [minValue, maxValue)
 * and that contain all the lowest values that can possibly be returned.
 */
function randomUniqueMinIntegers(minNumberOfValues, maxNumberOfValues, minValue, maxValue) {
    if (maxValue - minValue < maxNumberOfValues) {
        throw new Error("It is impossible to return more than n unique values among among n values.");
    }
    if (minNumberOfValues > maxNumberOfValues || minValue > maxValue) {
        throw new Error("Params starting with 'min' must be inferior to their counterpart starting with 'max'");
    }
    return fisherYatesShuffle(Array.from({ length: Math.random() * (maxNumberOfValues - minNumberOfValues + 1) + minNumberOfValues }, (_, i) => (i + minValue)));
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
export { stringReplaceAt, isDeepStrictEqual, isObject, almostEvenlySpacedIntegers, evenlySpacedNumbers, randomUniqueIntegers, otherAxis, executeFunctionEveryNCall, throwErrorIfUndefined, randomUniqueMinIntegers };
//# sourceMappingURL=util.js.map