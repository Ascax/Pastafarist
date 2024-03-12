/**
 * Substitutes the i-th character of a string with another string.
 * @param baseString The string to replace the character
 * @param index The index to replace the character
 * @param replacement The replacement string
 * @returns The string with the replaced character
 */
declare function stringReplaceAt(baseString: string, index: number, replacement: string): string;
/**
 * Check with deep equality wether two given objects (or primary types) are equal
 * @param object1 one of the two compared objects
 * @param object2 the other one of the two compared objects
 * @returns true if the two given objects are equal, using deep equality
 */
declare function isDeepStrictEqual(object1: any, object2: any): boolean;
/**
 * Returns true if the tested value's type is Object
 * @param object the tested value
 * @returns true if the tested value's type is Object
 */
declare function isObject(object: any): boolean;
/**
 * Type representing axes in a basis
 */
type Axis = "x" | "y";
/**
 * Returns an axis that is not the given axis
 * @param axis the axis that isn't returned
 */
declare function otherAxis(axis: Axis): Axis;
/**
 * Return numberOfValues evenly-spaced numbers between fromValue and toValue (evenly-spaced to the bounds as well).
 * For example, 2 evenly-spaced numbers between 0 and 10 would be 3.333 and 6.666 because the steps are the same between 0, 3.333, 6.666, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @param mapFn an optional function to map the results
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */
declare function evenlySpacedNumbers(numberOfValues: number, fromValue: number, toValue: number, mapFn?: (value: number) => number): Array<number>;
/**
 * Return numberOfValues almost-evenly-spaced integers (step values differ at most by 1) between fromValue and toValue (almost-evenly-spaced to the bounds as well).
 * For example, 2 almost-evenly-spaced integers between 0 and 10 would be 3 and 6 because the steps are almost the same between 0, 3, 6, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */
declare function almostEvenlySpacedIntegers(numberOfValues: number, fromValue: number, toValue: number): Array<number>;
/**
 * Randomly returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 * @param minNumberOfValues the minimum number of returned values
 * @param maxNumberOfValues the maximum number of returned values
 * @param minValue the minimum value that a returned value can take
 * @param maxValue the (maximum + 1) value that a returned value can take
 * @returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 */
declare function randomUniqueIntegers(minNumberOfValues: number, maxNumberOfValues: number, minValue: number, maxValue: number): Array<number>;
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
declare function randomUniqueMinIntegers(minNumberOfValues: number, maxNumberOfValues: number, minValue: number, maxValue: number): Array<number>;
/**
 * Pure functionnal decorator used to call the given function "func" every "n" call of the decorator,
 * and call the given function "defaultFunc" when "func" isn't called
 * @param func the function that have to be called every n call of the decorator
 * @param defaultFunc the function to call otherwise
 * @param n func is called every n call
 * @param currentN counter, compared to n
 * @returns the new decorator (pure functionnal decorator) and the current returned value (by func or defaultFunc)
 */
declare function executeFunctionEveryNCall<T extends (...args: any[]) => any>(func: T, defaultFunc: T, n: number, currentN?: number): [() => [any, T], T];
/**
 * Throws an error if the given value is undefined
 * @param value the checked value
 */
declare function throwErrorIfUndefined<T>(value: T | undefined): void;
export type { Axis };
export { stringReplaceAt, isDeepStrictEqual, isObject, almostEvenlySpacedIntegers, evenlySpacedNumbers, randomUniqueIntegers, otherAxis, executeFunctionEveryNCall, throwErrorIfUndefined, randomUniqueMinIntegers };
