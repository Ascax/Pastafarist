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
export { stringReplaceAt, isDeepStrictEqual, isObject, otherAxis, executeFunctionEveryNCall, throwErrorIfUndefined };
