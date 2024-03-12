/**
 * Computes the sum of all the elements of the array
 * @param array the array
 * @returns the sum of all the elements of the array
 */
declare function sum(array: Array<number>): number;
/**
 * Returns a new instance of the given array without the element of this array that is at the given index
 * @param arr the array on which an element is removed
 * @param index the index at which the element of the array is removed
 * @returns a new instance of the given array without the element of this array that is at the given index
 */
declare function arrayWithoutElementAtIndex<T>(arr: Array<T>, index: number): Array<T>;
/**
 * Shuffles a new instance of the given array using a pure recursive version of the Fisher-Yates shuffle algorithm
 * @param arrayToShuffle the array to shuffle
 * @returns a shuffled new instance of the given array using a pure recursive version of the Fisher-Yates shuffle algorithm
 */
declare function fisherYatesShuffle<T>(arrayToShuffle: Array<T>): Array<T>;
/**
 * Returns a random element from the given array that is not in the other given array, or undefined
 * @param fromArray the array from where the random element is returned
 * @param otherArray the array containing the elements that must not be returned
 * @returns a random element from the given array that is not in the other given array, or undefined
 */
declare function getRandomArrayElementNotInOtherArray<T>(fromArray: Array<T>, otherArray: Array<T>): T | undefined;
/**
 * Returns a random element from the given array
 * @param fromArray the array from where the random element is returned
 * @returns a random element from the given array
 */
declare function getRandomArrayElement<T>(fromArray: Array<T>): T;
export { sum, getRandomArrayElement, getRandomArrayElementNotInOtherArray, arrayWithoutElementAtIndex, fisherYatesShuffle };
