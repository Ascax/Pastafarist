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
export { randomUniqueMinIntegers, almostEvenlySpacedIntegers, evenlySpacedNumbers, randomUniqueIntegers };
