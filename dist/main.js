/**
 * Substitutes the i-th character of a string with another string.
 * @param baseString The string to replace the character
 * @param index The index to replace the character
 * @param replacement The replacement string
 * @returns The string with the replaced character
 */ function $40510ba8f0a373f5$export$28fa87aef2804660(baseString, index, replacement) {
    return baseString.substring(0, index) + replacement + baseString.substring(index + replacement.length);
}
/**
 * Check with deep equality wether two given objects (or primary types) are equal
 * @param object1 one of the two compared objects
 * @param object2 the other one of the two compared objects
 * @returns true if the two given objects are equal, using deep equality
 */ function $40510ba8f0a373f5$export$5285172931ab13f4(object1, object2) {
    if (object1 === object2) return true;
    if (object1 === undefined || object2 === undefined || !$40510ba8f0a373f5$export$a6cdc56e425d0d0a(object1)) return false;
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    if (objKeys1.length !== objKeys2.length) return false;
    for (const key of objKeys1){
        const value1 = object1[key];
        const value2 = object2[key];
        const areObjects = $40510ba8f0a373f5$export$a6cdc56e425d0d0a(value1) && $40510ba8f0a373f5$export$a6cdc56e425d0d0a(value2);
        if (areObjects && !$40510ba8f0a373f5$export$5285172931ab13f4(value1, value2) || !areObjects && value1 !== value2) return false;
    }
    return true;
}
/**
 * Returns true if the tested value's type is Object
 * @param object the tested value
 * @returns true if the tested value's type is Object
 */ function $40510ba8f0a373f5$export$a6cdc56e425d0d0a(object) {
    return object !== null && typeof object === "object";
}
/**
 * Returns an axis that is not the given axis
 * @param axis the axis that isn't returned
 */ function $40510ba8f0a373f5$export$c4a9a14cbc132f19(axis) {
    switch(axis){
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
 */ function $40510ba8f0a373f5$export$9ebd3ce208f36c29(func, defaultFunc, n, currentN = 0) {
    function executeFunctionEveryNCallClosure(currentNClosure) {
        const nextFunc = !currentNClosure ? func : defaultFunc;
        return [
            ()=>executeFunctionEveryNCallClosure((currentNClosure + 1) % n),
            nextFunc
        ];
    }
    return executeFunctionEveryNCallClosure(currentN);
}
/**
 * Returns true if the given value is not undefined
 * @param value the checked value
 * @returns true if the given value is not undefined
 */ function $40510ba8f0a373f5$var$isNotUndefined(value) {
    return value !== undefined;
}
/**
 * Throws an error if the given value is undefined
 * @param value the checked value
 */ function $40510ba8f0a373f5$export$fc30a1099bd4c458(value) {
    if (!$40510ba8f0a373f5$var$isNotUndefined(value)) throw new Error("unexpected undefined value");
}



/**
 * Computes the sum of all the elements of the array
 * @param array the array
 * @returns the sum of all the elements of the array
 */ function $18ac3fdcce69be77$export$8a63f25cc62965f1(array) {
    return array.reduce((acc, current)=>acc + current, 0);
}
/**
 * Returns a new instance of the given array without the element of this array that is at the given index
 * @param arr the array on which an element is removed
 * @param index the index at which the element of the array is removed
 * @returns a new instance of the given array without the element of this array that is at the given index
 */ function $18ac3fdcce69be77$export$f80d8c1df4fdd372(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}
/**
 * Shuffles a new instance of the given array using a pure recursive version of the Fisher-Yates shuffle algorithm
 * @param arrayToShuffle the array to shuffle
 * @returns a shuffled new instance of the given array using a pure recursive version of the Fisher-Yates shuffle algorithm
 */ function $18ac3fdcce69be77$export$b9cef0a76510a4e3(arrayToShuffle) {
    function fisherYatesShuffleTailRecursive(alreadyShuffled, restToShuffle) {
        if (restToShuffle.length === 0) return alreadyShuffled;
        const randomIndex = Math.floor(Math.random() * restToShuffle.length);
        return fisherYatesShuffleTailRecursive(alreadyShuffled.concat(restToShuffle[randomIndex]), $18ac3fdcce69be77$export$f80d8c1df4fdd372(restToShuffle, randomIndex));
    }
    return fisherYatesShuffleTailRecursive([], arrayToShuffle);
}
/**
 * Returns a random element from the given array that is not in the other given array, or undefined
 * @param fromArray the array from where the random element is returned
 * @param otherArray the array containing the elements that must not be returned
 * @returns a random element from the given array that is not in the other given array, or undefined
 */ function $18ac3fdcce69be77$export$5265c9476afc3454(fromArray, otherArray) {
    if (!fromArray.length) throw new Error("Cannot get a random element from an empty array");
    const randomIndexOrder = $18ac3fdcce69be77$export$b9cef0a76510a4e3(Array.from({
        length: fromArray.length
    }, (_, i)=>i));
    const elementIndex = randomIndexOrder.reduce((acc, randomIndex)=>{
        if (acc === undefined && !otherArray.some((el)=>(0, $40510ba8f0a373f5$export$5285172931ab13f4)(el, fromArray[randomIndex]))) return randomIndex;
        return acc;
    }, undefined);
    return elementIndex === undefined ? undefined : fromArray[elementIndex];
}
/**
 * Returns a random element from the given array
 * @param fromArray the array from where the random element is returned
 * @returns a random element from the given array
 */ function $18ac3fdcce69be77$export$5464853d700fc7c4(fromArray) {
    if (!fromArray.length) throw new Error("Cannot get a random element from an empty array");
    return fromArray[Math.floor(Math.random() * fromArray.length)];
}


/**
 * Return numberOfValues evenly-spaced numbers between fromValue and toValue (evenly-spaced to the bounds as well).
 * For example, 2 evenly-spaced numbers between 0 and 10 would be 3.333 and 6.666 because the steps are the same between 0, 3.333, 6.666, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @param mapFn an optional function to map the results
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */ function $5165d77636d73d76$export$1f0f4408c02d0b69(numberOfValues, fromValue, toValue, mapFn = (x)=>x) {
    const [min, max, indexingFunction] = fromValue < toValue ? [
        fromValue,
        toValue,
        (index)=>index + 1
    ] : [
        toValue,
        fromValue,
        (index)=>numberOfValues - index
    ];
    return Array.from({
        length: numberOfValues
    }, (_, index)=>mapFn(indexingFunction(index) * (max - min) / (numberOfValues + 1) + min));
}
/**
 * Return numberOfValues almost-evenly-spaced integers (step values differ at most by 1) between fromValue and toValue (almost-evenly-spaced to the bounds as well).
 * For example, 2 almost-evenly-spaced integers between 0 and 10 would be 3 and 6 because the steps are almost the same between 0, 3, 6, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */ function $5165d77636d73d76$export$aef1c139bbab4a94(numberOfValues, fromValue, toValue) {
    return $5165d77636d73d76$export$1f0f4408c02d0b69(numberOfValues, fromValue, toValue, Math.floor);
}
/**
 * Returns a random integer x such as minValue <= x < maxValue
 * @param minValue the minimum value that the returned integer can take
 * @param maxValue the (maximum + 1) value that the returned integer can take
 * @returns random integer x such as minValue <= x < maxValue
 */ function $5165d77636d73d76$var$randomInteger(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}
/**
 * Returns a random integer in [minValue, maxValue) and that is not present in the given "existingIntegers"
 * @param minValue the minimum value that the returned integer can take
 * @param maxValue the (maximum + 1) value that the returned integer can take
 * @param existingIntegers the returned integer must not already be present in this array
 * @returns a random integer in the given bounds and that is not present in the given "existingIntegers"
 */ function $5165d77636d73d76$var$randomUniqueInteger(minValue, maxValue, existingIntegers) {
    let randInt = $5165d77636d73d76$var$randomInteger(minValue, maxValue);
    while(existingIntegers.find((currentInt)=>randInt === currentInt))randInt = $5165d77636d73d76$var$randomInteger(minValue, maxValue);
    return randInt;
}
/**
 * Randomly returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 * @param minNumberOfValues the minimum number of returned values
 * @param maxNumberOfValues the maximum number of returned values
 * @param minValue the minimum value that a returned value can take
 * @param maxValue the (maximum + 1) value that a returned value can take
 * @returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 */ function $5165d77636d73d76$export$5bbc50fbda1e9adc(minNumberOfValues, maxNumberOfValues, minValue, maxValue) {
    if (maxValue - minValue < maxNumberOfValues) throw new Error("It is impossible to return more than n unique values among among n values.");
    if (minNumberOfValues > maxNumberOfValues || minValue > maxValue) throw new Error("Params starting with 'min' must be inferior to their counterpart starting with 'max'");
    function randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues, existingIntegers) {
        if (!maxNumberOfValues) return existingIntegers;
        if (maxNumberOfValues === minNumberOfValues || Math.random() < 0.5) return randomUniqueIntegersTailRecursive(minNumberOfValues - 1, maxNumberOfValues - 1, existingIntegers.concat($5165d77636d73d76$var$randomUniqueInteger(minValue, maxValue, existingIntegers)));
        else return randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues - 1, existingIntegers);
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
 */ function $5165d77636d73d76$export$e41b6e290f312e03(minNumberOfValues, maxNumberOfValues, minValue, maxValue) {
    if (maxValue - minValue < maxNumberOfValues) throw new Error("It is impossible to return more than n unique values among among n values.");
    if (minNumberOfValues > maxNumberOfValues || minValue > maxValue) throw new Error("Params starting with 'min' must be inferior to their counterpart starting with 'max'");
    return (0, $18ac3fdcce69be77$export$b9cef0a76510a4e3)(Array.from({
        length: Math.random() * (maxNumberOfValues - minNumberOfValues + 1) + minNumberOfValues
    }, (_, i)=>i + minValue));
}




/**
 * Vector constructor
 * @param x x coordinates
 * @param y y coordinates
 * @returns a new vector with the corresponding coordinates
 */ function $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(x, y) {
    return {
        x: x,
        y: y
    };
}
/**
 * Translates a point according to a translation vector
 * @param origin The origin point
 * @param translation The translation vector
 * @returns The vector that corresponds to the origin point translated along the translation vector 
 */ function $5d1a0b0fa44ed72f$export$a789c4b78a9cdab1(origin, translation) {
    return {
        x: origin.x + translation.x,
        y: origin.y + translation.y
    };
}
/**
 * Returns the string representation of the vector
 * @param v the vector
 * @returns the string representation of the vector
 */ function $5d1a0b0fa44ed72f$export$fe81c16edca8c87a(v) {
    return `(${v.x}, ${v.y})`;
}
/**
 * Computes the distance between 2 vectors
 * @param a a vector
 * @param b another vector
 * @returns the euclidean distance between vector a and b
 */ function $5d1a0b0fa44ed72f$export$a5235d323d0269f3(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}
/**
 * Creates a range*range square of positions centered on the position {0, 0} and filter those positions so that
 * they are in the range of {0, 0} using the given range, and the given distance function.
 * @param range the range in which the positions from the created square are kept and returned
 * @param distanceFunction the function that evaluates the distance between two positions.
 * Its return value is compared to the given range.
 * @returns all the positions that are in the range of the position {0, 0} using the given distance function.
 * The position {0, 0} is included in the result.
 */ function $5d1a0b0fa44ed72f$export$a953f9c59c085f8c(range, distanceFunction) {
    return Array.from({
        length: 2 * range + 1
    }, (_, i)=>Array.from({
            length: 2 * range + 1
        }, (_, j)=>$5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(i - range, j - range))).flat().filter((vector)=>distanceFunction($5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, 0), vector) <= range);
}
/**
 * Returns a Vector2D containing the information of the movement that has to be done in order to move by one step from fromPosition towards the given toPosition.
 * First, the movement is done along the given "firstAxis" parameter.
 * @param fromPosition the initial position, before the movement
 * @param toPosition the position that we want to reach, from the fromPosition
 * @param firstAxis the movement is done along this axis first.
 * @returns a Vector2D containing the information of the movement that has to be done in order to move towards the given toPosition.
 */ function $5d1a0b0fa44ed72f$export$d6cdf30b0724dc8a(fromPosition, toPosition, firstAxis = "x") {
    switch(firstAxis){
        case "x":
            if (fromPosition.x < toPosition.x) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(1, 0);
            else if (fromPosition.x > toPosition.x) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(-1, 0);
            else if (fromPosition.y < toPosition.y) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, 1);
            else if (fromPosition.y > toPosition.y) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, -1);
            else return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, 0);
        case "y":
            if (fromPosition.y < toPosition.y) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, 1);
            else if (fromPosition.y > toPosition.y) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, -1);
            else if (fromPosition.x < toPosition.x) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(1, 0);
            else if (fromPosition.x > toPosition.x) return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(-1, 0);
            else return $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7(0, 0);
        default:
            throw new Error("Unknown axis");
    }
}
/**
 * Returns an array of positions that constitute a path between two other positions, i.e. that visualy links two other positions.
 * @param fromPosition the starting position and target position for building the path are not included in the returned array
 * @param toPosition the target position for building the path, not included in the returned array
 * @param firstAxis this parameter can be used to define the axis to prioritize for movement when multiple options are available.
 * @returns an array of positions that constitute a path between two other positions, i.e. that visualy links two other positions.
 */ function $5d1a0b0fa44ed72f$export$79f1e22ebd1cea93(fromPosition, toPosition, firstAxis) {
    const firstProcessedPosition = $5d1a0b0fa44ed72f$export$a789c4b78a9cdab1(fromPosition, $5d1a0b0fa44ed72f$export$d6cdf30b0724dc8a(fromPosition, toPosition, firstAxis));
    function linkingPathTailRecursive(fromPosition, toPosition, positionsAccumulator) {
        if ((0, $40510ba8f0a373f5$export$5285172931ab13f4)(fromPosition, toPosition)) return positionsAccumulator;
        const nextProcessedPosition = $5d1a0b0fa44ed72f$export$a789c4b78a9cdab1(fromPosition, $5d1a0b0fa44ed72f$export$d6cdf30b0724dc8a(fromPosition, toPosition, firstAxis));
        return linkingPathTailRecursive(nextProcessedPosition, toPosition, positionsAccumulator.concat(fromPosition));
    }
    return linkingPathTailRecursive(firstProcessedPosition, toPosition, []);
}
/**
 * Returns an array of positions that constitute a path linking the given positions, i.e. that visualy links the other positions.
 * @param positions two-dimensional array of positions. Positions from each "index" are linked to the positions from the "index - 1" index.
 * the positions given as parameter are not included in the returned array.
 * @param firstAxis this parameter can be used to define the axis to prioritize for movement when multiple options are available.
 * @returns an array of positions that constitute a path linking the given positions, i.e. that visualy links the other positions.
 */ function $5d1a0b0fa44ed72f$export$e331a6d5fd702cb4(positions, firstAxis) {
    return positions.reduce((acc, currentPositions, index)=>{
        if (!index) return acc;
        return acc.concat(currentPositions.map((currentPosition)=>positions[index - 1].map((previousPosition)=>$5d1a0b0fa44ed72f$export$79f1e22ebd1cea93(previousPosition, currentPosition, firstAxis)).flat()).flat());
    }, []);
}
/**
 * Returns true iff the given vector respects the coordinate constraints given as parameter
 * @param vector the vector that is tested
 * @param xCoord the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @param yCoord the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @returns true iff the given vector respects the coordinate constraints given as parameter
 */ function $5d1a0b0fa44ed72f$export$7c5c4da20bd6ab11(vector, xCoord, yCoord) {
    return (xCoord === undefined || vector.x === xCoord) && (yCoord === undefined || vector.y === yCoord);
}


/**
 * A world constructor
 * @param width the width of the world
 * @param height The height of the world
 * @returns A world with the given width and height and turns elapsed.
 */ function $c8000e650ca2b19e$export$bd9127779b59056d(width, height) {
    if (width <= 0 || height <= 0) throw new Error("World size values must be positive");
    if (!Number.isInteger(width) || !Number.isInteger(height)) throw new Error("World size values must be integers");
    return {
        width: width,
        height: height
    };
}
/**
 * Returns the length of the given Axis in the given World
 * @param world the world from which the Axis length is computed
 * @param axis the axis that we want to know the length
 * @returns the length of the given Axis in the given World
 */ function $c8000e650ca2b19e$export$6f120c8de52275af(world, axis) {
    switch(axis){
        case "x":
            return world.width;
        case "y":
            return world.height;
        default:
            throw new Error("Unknown axis");
    }
}
/**
 * Returns an array of 1 to maxPositions random unique aligned positions
 * @param world the world on which the positions are computed
 * @param minPositions the minimum number of positions inside the returned array
 * @param maxPositions the maximum number of positions inside the returned array
 * @param axis the returned positions can reach each other by a translation along this axis
 * @param lineNumber the coordinate of the returned position on the not-given axis
 * @returns an array of 1 to maxPositions random unique positions, that all have the same coordinate value on the axis that was not given
 */ function $c8000e650ca2b19e$export$1b9225b974b88e4d(world, minPositions, maxPositions, axis, lineNumber) {
    return $c8000e650ca2b19e$export$8db8e48c4eea7a7b(axis, (0, $5165d77636d73d76$export$5bbc50fbda1e9adc)(minPositions, maxPositions, 0, $c8000e650ca2b19e$export$6f120c8de52275af(world, axis)), lineNumber);
}
/**
 * Returns an array of positions corresponding to the given parameters
 * @param parallelToAxis the returned positions can reach each other by a translation along this axis
 * @param parallelAxisCoords the coordinates, on the parallel axis, of the returned positions
 * @param otherAxislineNumber the coordinate of the returned position on the not-given axis
 * @returns an array of 1 to maxPositions random unique positions, that all have the same coordinate value on the axis that was not given
 */ function $c8000e650ca2b19e$export$8db8e48c4eea7a7b(parallelToAxis, parallelAxisCoords, otherAxislineNumber) {
    return parallelAxisCoords.map((coord)=>parallelToAxis === "x" ? (0, $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7)(coord, otherAxislineNumber) : (0, $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7)(otherAxislineNumber, coord));
}
/**
 * Checks if a position is in a world or not
 * @param world The world
 * @param position A position
 * @returns true iif the position is in world
 */ function $c8000e650ca2b19e$export$df7e7ceaf9ece28b(world, position) {
    return position.x >= 0 && position.x < world.width && position.y >= 0 && position.y < world.height;
}
/**
 * Returns the text representation of the world
 * @param world the world
 * @returns the text representation of the world
 */ function $c8000e650ca2b19e$export$b40ca192d81d6835(world) {
    return `${" ".repeat(world.width * 2)}\n`.repeat(world.height - 1).concat(`${" ".repeat(world.width * 2)}`);
}
/**
 * Returns the position of the character representing the content of what is at the position described by the given vector, in the given world
 * @param world the world represented by a string where a character represents the given vector
 * @param vector the vector representing the position, represented as a character in the world string representation
 * @returns the position of the character representing the content of what is at the position described by the given vector, in the given world
 */ function $c8000e650ca2b19e$export$50fd26fced4f5eb(world, vector) {
    if (!$c8000e650ca2b19e$export$df7e7ceaf9ece28b(world, vector)) throw new Error("Position is not in world");
    return vector.y * (world.width * 2 + 1) + vector.x * 2;
}
/**
 * Returns all the positions in the world that are in the range of the given positon, using the given distance function
 * @param range the range, i.e. max distance, in which the returned positions are from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned positions must be
 * @param fromPosition the position from which the returned positions can be reached
 * @returns all the positions in the world that are in the range of the given positon, using the given distance function.
 * fromPosition can be part of those returned positions.
 */ function $c8000e650ca2b19e$export$25aa2228016b353a(range, distanceFunction, world, fromPosition) {
    return (0, $5d1a0b0fa44ed72f$export$a953f9c59c085f8c)(range, distanceFunction).map((movementVector)=>(0, $5d1a0b0fa44ed72f$export$a789c4b78a9cdab1)(fromPosition, movementVector)).filter((translatedPosition)=>$c8000e650ca2b19e$export$df7e7ceaf9ece28b(world, translatedPosition));
}
/**
 * Returns all the positions that are in the bounds of the given world
 * @param world the world that constrains the possible returned positions' values
 * @returns all the positions that are in the bounds of the given world
 */ function $c8000e650ca2b19e$export$aa79071674f0bc6c(world) {
    return Array.from({
        length: world.width
    }, (_, currentWidth)=>{
        return Array.from({
            length: world.height
        }, (_, currentHeight)=>(0, $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7)(currentWidth, currentHeight));
    }).flat();
}
/**
 * Returns a random position of the world which isn't in the givenPositions
 * @param world the world form which the positions are created and can be returned
 * @param givenPositions the positions that must not be returned
 * @returns a random position of the world which isn't in the givenPositions
 */ function $c8000e650ca2b19e$export$757e216c66040882(world, givenPositions) {
    return (0, $18ac3fdcce69be77$export$5265c9476afc3454)($c8000e650ca2b19e$export$aa79071674f0bc6c(world), givenPositions);
}
/**
 * Returns all the positions from the world where not a single actor from the given actors is, and which
 * are in the given range, using the given distance function
 * @param range the range, i.e. max distance, in which the returned positions are from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned positions must be
 * @param fromPosition the position from which the returned positions can be reached
 * @param actors the returned positions must respect the condition that not a single actor from this
 * array is on one of them.
 * @returns all the positions from the world where not a single actor from the given actors is, and which
 * are in the given range, using the given distance function
 */ function $c8000e650ca2b19e$var$getEmptyCellsInRange(world, actors, fromPosition, range, distanceFunction) {
    return $c8000e650ca2b19e$export$25aa2228016b353a(range, distanceFunction, world, fromPosition).filter((currentWorldPosition)=>!actors.some((currentActor)=>(0, $40510ba8f0a373f5$export$5285172931ab13f4)(currentActor.position, currentWorldPosition)));
}
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
 */ function $c8000e650ca2b19e$export$1bb89be7afb1c2db(world, actors, fromPosition, range, distanceFunction) {
    const possibleMoves = $c8000e650ca2b19e$var$getEmptyCellsInRange(world, actors, fromPosition, range, distanceFunction);
    return possibleMoves.length > 0 ? (0, $18ac3fdcce69be77$export$5464853d700fc7c4)(possibleMoves) : undefined;
}







///
/// 
///
/**
 * This file contains:
 * - getters to get the content of the externalProps field of the given actor of type {@link Actor}
 * - setters to set the externalProps of the given actor to the given value
 */ ///
/// 
///
function $29b50ff5dbf23222$export$37f6afb282f558d2(actor, conviction) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            conviction: conviction
        }
    };
}
function $29b50ff5dbf23222$export$bd82ad6716e125ba(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.conviction);
    return actor.externalProps.conviction;
}
function $29b50ff5dbf23222$export$9644c4f5061d3b67(actor, range) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            range: range
        }
    };
}
function $29b50ff5dbf23222$export$fef151b94550e9f5(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.range);
    return actor.externalProps.range;
}
function $29b50ff5dbf23222$export$82b11c634d451(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.waypointTarget);
    return actor.externalProps.waypointTarget;
}
function $29b50ff5dbf23222$export$c9cb3329b33adb1(actor, waypointTarget) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            waypointTarget: waypointTarget
        }
    };
}
function $29b50ff5dbf23222$export$ba9cb603e2ce3491(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.waypointNumber);
    return actor.externalProps.waypointNumber;
}
function $29b50ff5dbf23222$export$134435ab3fd43f21(actor, waypointNumber) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            waypointNumber: waypointNumber
        }
    };
}
function $29b50ff5dbf23222$export$90e75dbee271d7f6(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.waypointTargetNumber);
    return actor.externalProps.waypointTargetNumber;
}
function $29b50ff5dbf23222$export$dcd77d6350f26a96(actor, waypointTarget, waypointTargetNumber) {
    return $29b50ff5dbf23222$export$c9cb3329b33adb1($29b50ff5dbf23222$export$f20b45baf8912773(actor, waypointTargetNumber), waypointTarget);
}
function $29b50ff5dbf23222$export$f20b45baf8912773(actor, waypointTargetNumber) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            waypointTargetNumber: waypointTargetNumber
        }
    };
}
function $29b50ff5dbf23222$export$338473d6fb3d2f74(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.spawnProba);
    return actor.externalProps.spawnProba;
}
function $29b50ff5dbf23222$export$5efb8d72daa73137(actor, spawnProba) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            spawnProba: spawnProba
        }
    };
}
function $29b50ff5dbf23222$export$293a62676c2eae72(actor, spreadIgnorancePower) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            spreadIgnorancePower: spreadIgnorancePower
        }
    };
}
function $29b50ff5dbf23222$export$cd82cc298c12cbf1(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.spreadIgnorancePower);
    return actor.externalProps.spreadIgnorancePower;
}
function $29b50ff5dbf23222$export$382aa2279ad1f558(actor, faithPoints) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            faithPoints: faithPoints
        }
    };
}
function $29b50ff5dbf23222$export$18ae7b999fbafd43(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.faithPoints);
    return actor.externalProps.faithPoints;
}
function $29b50ff5dbf23222$export$e5a7ab89a57f6d2c(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.maxFaith);
    return actor.externalProps.maxFaith;
}
function $29b50ff5dbf23222$export$2f1b9f487eed2e82(actor, maxFaith) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            maxFaith: maxFaith
        }
    };
}
function $29b50ff5dbf23222$export$e487a656e9fd96f2(actor, faithPoints, maxFaithPoints) {
    return $29b50ff5dbf23222$export$382aa2279ad1f558($29b50ff5dbf23222$export$2f1b9f487eed2e82(actor, maxFaithPoints), faithPoints);
}
function $29b50ff5dbf23222$export$58558764276ea53(actor) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps);
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(actor.externalProps.playProba);
    return actor.externalProps.playProba;
}
function $29b50ff5dbf23222$export$96bdea7d5efd5711(actor, playProba) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            playProba: playProba
        }
    };
}


/**
 * Actors that can move by themselves on the board.
 */ const $d2969b5a047bb891$export$6c184939f519c8bc = [
    "ignorant",
    "ignoranceSpreader"
];
/**
 * All the different actor kinds.
 */ const $d2969b5a047bb891$export$95f3d46e17c42323 = [
    ...$d2969b5a047bb891$export$6c184939f519c8bc,
    "goodGuy",
    "ground",
    "spawner",
    "spaghettiMonster",
    "player"
];
/**
 * Returns true if the given actor's kind is included in the given array of kind
 * @param actor the tested actor
 * @param kinds the array of kinds
 * @returns true if the given actor's kind is included in the given array of kind
 */ function $d2969b5a047bb891$export$89d23cb4210231c(actor, kinds) {
    return kinds.includes(actor.kind);
}
/**
 * Returns true if the given actor's kind is included in the kinds of the type Walker,
 * which reprensents the actors that move on the path generated from the spawns to the spaghettiMonsters
 * @param actor the tested actor
 * @returns true if the given actor's kind is included in the kinds of the type Walker,
 * which reprensents the actors that move on the path generated from the spawns to the spaghettiMonsters
 */ function $d2969b5a047bb891$export$510f060e28b92e66(actor) {
    return $d2969b5a047bb891$export$89d23cb4210231c(actor, [
        ...$d2969b5a047bb891$export$6c184939f519c8bc
    ]);
}
/**
 * Returns a string representation of the given actor
 * @param actor The actor that is described by the returned string
 * @returns a string representation of the actor
 */ function $d2969b5a047bb891$export$76f7038dc914195b(actor) {
    return `{position: ${(0, $5d1a0b0fa44ed72f$export$fe81c16edca8c87a)(actor.position)}, kind: ${actor.kind}}`;
}
/**
 * Returns the string representation of the world with the given actor in it
 * @param world The world represented by worldString, and where the actors are
 * @param worldString The string that represents the world, but not necessarily representing all of the actors in the world
 * @param actor The actor that is being added to the string representation of the world
 * @returns The string representation of the world with the given actor in it
 */ function $d2969b5a047bb891$export$526eada18a494618(world, worldString, actor) {
    return (0, $40510ba8f0a373f5$export$28fa87aef2804660)(worldString, (0, $c8000e650ca2b19e$export$50fd26fced4f5eb)(world, actor.position), actor.kind.charAt(0));
}
/**
 * Return a new array containing actors with the specified kind.
 * 
 * @param actors The array to filter from 
 * @param kinds The kinds to keep
 * @returns A new array with actor from the given array, of the given kind
 */ function $d2969b5a047bb891$export$4522764b05bf041(actors, kinds) {
    return actors.filter((actor)=>kinds.find((key)=>actor.kind === key));
}
/**
 * Applies a translation to the actor's position and returns the translated actor.
 * @param actor The actor that is being tranlated
 * @param movementVector The movement vector
 * @returns The actor after its position was translated according to a movement vector
 */ function $d2969b5a047bb891$export$43ac269cfac29bfc(actor, movementVector) {
    return {
        ...actor,
        position: (0, $5d1a0b0fa44ed72f$export$a789c4b78a9cdab1)(actor.position, movementVector)
    };
}
/**
 * Returns the informations about the waypoint that should be the target once the given waypoint is reached
 * @param actors all the actors of the game
 * @param waypointTarget the position of the current waypoint target
 * @param waypointTargetNumber the number of the current waypoint target
 * @returns a dictionnary containing the informations about the waypoint that should be the target once the given waypoint is reached
 */ function $d2969b5a047bb891$export$cf903b528c3fad7f(actors, waypointTarget, waypointTargetNumber) {
    const possibilities = actors.filter((currentActor)=>currentActor?.externalProps?.waypointNumber === waypointTargetNumber + 1);
    if (!possibilities.length) return {
        waypointTargetNumber: waypointTargetNumber,
        waypointTarget: waypointTarget
    };
    const nextWaypointTarget = (0, $18ac3fdcce69be77$export$5464853d700fc7c4)(possibilities);
    return {
        waypointTargetNumber: (0, $29b50ff5dbf23222$export$ba9cb603e2ce3491)(nextWaypointTarget),
        waypointTarget: nextWaypointTarget.position
    };
}
/**
 * Translates the movingActor according to the given movementVector, and updates its waypointTarget if it has been reached
 * @param actors all the actors of the game
 * @param movingActor the actor that is being translated
 * @param movementVector the movement defining where the movingActor is moving
 * @returns the movingActor with its updated position (after the movement)
 */ function $d2969b5a047bb891$export$46a2484a86dc23aa(actors, movingActor, movementVector) {
    const newPosition = (0, $5d1a0b0fa44ed72f$export$a789c4b78a9cdab1)(movingActor.position, movementVector);
    if ($d2969b5a047bb891$export$510f060e28b92e66(movingActor) && (0, $40510ba8f0a373f5$export$5285172931ab13f4)(newPosition, (0, $29b50ff5dbf23222$export$82b11c634d451)(movingActor))) {
        const nextWaypoint = $d2969b5a047bb891$export$cf903b528c3fad7f(actors, (0, $29b50ff5dbf23222$export$82b11c634d451)(movingActor), (0, $29b50ff5dbf23222$export$90e75dbee271d7f6)(movingActor));
        return (0, $29b50ff5dbf23222$export$f20b45baf8912773)((0, $29b50ff5dbf23222$export$c9cb3329b33adb1)({
            ...movingActor,
            position: newPosition
        }, nextWaypoint.waypointTarget), nextWaypoint.waypointTargetNumber);
    }
    return {
        ...movingActor,
        position: newPosition
    };
}
/**
 * Returns whether an actor is valid among an environment (world, other actors...) given as parameters
 * @param world The world where the actor is
 * @param actor We want to know if this actor is valid
 * @returns true iif the actor is in the world's bounds
 */ function $d2969b5a047bb891$export$7cf70fd7ea9208c3(world, actor) {
    return (0, $c8000e650ca2b19e$export$df7e7ceaf9ece28b)(world, actor.position);
}
/**
 * Returns the actors from the given actor array whose position respect the given position constraints
 * @param actors the actors potentially returned and againt which the coordinate constraints are tested
 * @param xPosition the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @param yPosition the y coordinate constraint. If undefined, x coordinate is not a constraint.
 * @returns the actors from the given actor array whose position respect the given position constraints
 */ function $d2969b5a047bb891$export$335c22f9cdb6dec0(actors, xPosition, yPosition) {
    return actors.filter((currentActor)=>(0, $5d1a0b0fa44ed72f$export$7c5c4da20bd6ab11)(currentActor.position, xPosition, yPosition));
}

















/**
 * Creates a default action generator for the given action.
 * @param action the action we want to decorate to create a generator returning functions to use after the use of the given function
 * @returns an action generator that will always return the same generator and the same action as the given action
 */ function $01f49ebe73462dbb$export$5fdaf199722de9fb(action) {
    return [
        ()=>$01f49ebe73462dbb$export$5fdaf199722de9fb(action),
        action
    ];
}
/**
 * All the default actions, so that each Phase can be called on each actor, even if the actor hasn't its specific phase function
 */ const $01f49ebe73462dbb$export$39cd167cbcb283e3 = {
    spawn: (params)=>undefined,
    temperatureRise: (params)=>0,
    spreadIgnorance: (params)=>{
        return {
            impactedActorsIndices: [],
            impactAmounts: []
        };
    },
    convertEnemies: (params)=>{
        return {
            impactedActorsIndices: [],
            impactAmounts: []
        };
    },
    enemyFlee: (params)=>false,
    move: (params)=>{
        return (0, $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7)(0, 0);
    },
    play: (params)=>undefined
};
/**
 * The "spawner" action.
 * It has a 50% chance to spawn a new actor, which has 70% chance to be an ignorant, or 30% chance to be an ignoranceSpreader.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns A new actor to be spawned
 */ function $01f49ebe73462dbb$export$1713f5ac2bf0caf5(params) {
    if (Math.random() < (0, $29b50ff5dbf23222$export$338473d6fb3d2f74)(params.actingActor)) {
        if (Math.random() < 0.7) return (0, $19b66a49a5ef583a$export$774c92c6aec941e8)("ignorant", params.actorsAcc, params.actingActor.position);
        else return (0, $19b66a49a5ef583a$export$774c92c6aec941e8)("ignoranceSpreader", params.actorsAcc, params.actingActor.position);
    }
    return undefined;
}
/**
 * The "temperatureRise" action.
 * It returns the damage done to the spaghetti monster. The actor only does damage if it's on the same
 * position as the spaghetti monster
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns The amount of damage to do to the spaghetti monster
 */ function $01f49ebe73462dbb$export$4e1dd93b0eb1e002(params) {
    return params.actorsAcc.find((a)=>(0, $d2969b5a047bb891$export$89d23cb4210231c)(a, [
            "spaghettiMonster"
        ]) && (0, $40510ba8f0a373f5$export$5285172931ab13f4)(a.position, params.actingActor.position)) === undefined ? 0 : (0, $29b50ff5dbf23222$export$bd82ad6716e125ba)(params.actingActor);
}
/**
 * Filter the actors whose faith must be impacted (positively or negatively) and return an object containing their indices and how much their faith is impacted
 * @param actors the actors from which the impacted actors are filtered
 * @param actingActor the actor that is impacting the faith of the other actors
 * @param impactedKinds the kinds of the actors that can be impacted by the actingActor
 * @param impactFunction the function defining the value by which the faith of the actors is impacted
 * @returns an object containing:
 * - the indices, in the given actors, of the impacted actors
 * - the values corresponding to how much the faithPoints of the impacted actors are impacted
 */ function $01f49ebe73462dbb$export$543e606d3b71a11(actors, actingActor, impactedKinds, impactFunction) {
    const impactedActorsIndices = actors.reduce((acc, currentActor, actorIndex)=>(0, $d2969b5a047bb891$export$89d23cb4210231c)(currentActor, impactedKinds) && (0, $5d1a0b0fa44ed72f$export$a5235d323d0269f3)(currentActor.position, actingActor.position) <= (0, $29b50ff5dbf23222$export$fef151b94550e9f5)(actingActor) ? acc.concat(actorIndex) : acc, []);
    const impactAmounts = impactFunction(actingActor, impactedActorsIndices.map((i)=>actors[i]));
    return {
        impactedActorsIndices: impactedActorsIndices,
        impactAmounts: impactAmounts
    };
}
/**
 * The "spreadIgnorance" action.
 * It returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 */ function $01f49ebe73462dbb$export$85c736e3ae64031c(params) {
    return $01f49ebe73462dbb$export$543e606d3b71a11(params.actorsAcc, params.actingActor, [
        "ignorant"
    ], (impactingActor, actorsToImpact)=>Array.from({
            length: actorsToImpact.length
        }, (_)=>(0, $29b50ff5dbf23222$export$cd82cc298c12cbf1)(impactingActor)));
}
/**
 * The "convertEnemies" action.
 * It returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 */ function $01f49ebe73462dbb$export$64d1efd965fa7dae(params) {
    return $01f49ebe73462dbb$export$543e606d3b71a11(params.actorsAcc, params.actingActor, [
        ...(0, $d2969b5a047bb891$export$6c184939f519c8bc)
    ], (impactingActor, actorsToImpact)=>Array.from({
            length: actorsToImpact.length
        }, (_)=>-1 * (0, $29b50ff5dbf23222$export$bd82ad6716e125ba)(impactingActor)));
}
/**
 * A "move" action
 * Returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 */ function $01f49ebe73462dbb$export$6998ddfcfd0cda18(params) {
    return (0, $5d1a0b0fa44ed72f$export$d6cdf30b0724dc8a)(params.actingActor.position, (0, $29b50ff5dbf23222$export$82b11c634d451)(params.actingActor), (0, $40510ba8f0a373f5$export$c4a9a14cbc132f19)(params.spawnersAxis));
}
/**
 * The "enemyFlee" action.
 * It returns whether the actor will decide to not exist or not.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns true iif the current actor decides to not exist anymore
 */ function $01f49ebe73462dbb$export$16d7f95031fcf492(params) {
    return (0, $d2969b5a047bb891$export$89d23cb4210231c)(params.actingActor, [
        ...(0, $d2969b5a047bb891$export$6c184939f519c8bc),
        "spaghettiMonster"
    ]) ? (0, $29b50ff5dbf23222$export$18ae7b999fbafd43)(params.actingActor) <= 0 : false;
}
/**
 * Can be used for inside "play" actions
 * Returns a good positions, or undefined if no good position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or undefined if no good position avaible
 */ function $01f49ebe73462dbb$export$a09057187e3ba803(params, range, distanceFunction) {
    const numberOfLines = (0, $c8000e650ca2b19e$export$6f120c8de52275af)(params.world, (0, $40510ba8f0a373f5$export$c4a9a14cbc132f19)(params.spawnersAxis));
    const consideredLineOrder = (0, $5165d77636d73d76$export$e41b6e290f312e03)(numberOfLines, numberOfLines, 0, numberOfLines);
    const groundListPerLine = consideredLineOrder.map((consideredLine)=>(0, $d2969b5a047bb891$export$4522764b05bf041)(params.spawnersAxis === "x" ? (0, $d2969b5a047bb891$export$335c22f9cdb6dec0)(params.actorsAcc, undefined, consideredLine) : (0, $d2969b5a047bb891$export$335c22f9cdb6dec0)(params.actorsAcc, consideredLine, undefined), [
            "ground",
            "spawner",
            "spaghettiMonster"
        ]));
    const returnedGroundAroundWhichToPlay = Array.from({
        length: (0, $c8000e650ca2b19e$export$6f120c8de52275af)(params.world, params.spawnersAxis) - 1
    }, (_, i)=>i + 1).reduce((acc, groundListPerLineConstraint)=>{
        if (acc) return acc;
        return groundListPerLine.reduce((acc2, currentGrounds)=>{
            if (acc2) return acc2;
            if (currentGrounds.length === groundListPerLineConstraint) {
                const actorsWithoutPlayers = params.actorsAcc.filter((a)=>!(0, $d2969b5a047bb891$export$89d23cb4210231c)(a, [
                        "player"
                    ]));
                const groundAroundWhichToPlay = currentGrounds.find((currentGround)=>(0, $c8000e650ca2b19e$export$1bb89be7afb1c2db)(params.world, actorsWithoutPlayers, currentGround.position, range, distanceFunction));
                return groundAroundWhichToPlay;
            }
            return acc2;
        }, undefined);
    }, undefined);
    return returnedGroundAroundWhichToPlay ? (0, $c8000e650ca2b19e$export$1bb89be7afb1c2db)(params.world, params.actorsAcc, returnedGroundAroundWhichToPlay.position, range, (0, $5d1a0b0fa44ed72f$export$a5235d323d0269f3)) : undefined;
}
/**
 * A "play" action
 * Returns a random valid position for the play action
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a random valid position for the play action, or undefined if no positions avaible
 */ function $01f49ebe73462dbb$var$playRandomValid(params) {
    return (0, $c8000e650ca2b19e$export$757e216c66040882)(params.world, (0, $d2969b5a047bb891$export$4522764b05bf041)(params.actorsAcc, (0, $18ac3fdcce69be77$export$f80d8c1df4fdd372)([
        ...(0, $d2969b5a047bb891$export$95f3d46e17c42323)
    ], [
        ...(0, $d2969b5a047bb891$export$95f3d46e17c42323)
    ].indexOf("player"))).map((a)=>a.position));
}
/**
 * A "play" action
 * Returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 */ function $01f49ebe73462dbb$export$899fbdb5fa08b653(params) {
    if (Math.random() > (0, $29b50ff5dbf23222$export$58558764276ea53)(params.actingActor)) return undefined;
    const range = 2;
    const distanceFunction = (0, $5d1a0b0fa44ed72f$export$a5235d323d0269f3);
    return $01f49ebe73462dbb$export$a09057187e3ba803(params, range, distanceFunction) ?? $01f49ebe73462dbb$var$playRandomValid(params);
}



/**
 * Actor constructor
 * @param position The position of the created Actor
 * @param actionGenerators The generators of the actions of the created actor
 * @param actions The actions of the created Actor
 * @param kind The kind of the created Actor
 * @param externalProps The data or parameters concerning the created actor
 * @returns A new actor
 */ function $19b66a49a5ef583a$export$cb2bc87933ecfd63(position, actionGenerators, actions, kind, externalProps) {
    const actorActions = {
        ...(0, $01f49ebe73462dbb$export$39cd167cbcb283e3),
        ...actions
    };
    const defaultActionsGenerators = Object.keys(actorActions).reduce((acc, key)=>{
        const action = actorActions[key];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        acc[key] = (0, $01f49ebe73462dbb$export$5fdaf199722de9fb)(action);
        return acc;
    }, {});
    const actorActionsGenerators = {
        ...defaultActionsGenerators,
        ...actionGenerators
    };
    return {
        position: position,
        actionGenerators: actorActionsGenerators,
        actions: actorActions,
        kind: kind,
        externalProps: externalProps
    };
}
/**
 * Constructor for a default "ignorant" actor
 * @param position the position where the ignorant is in the world
 * @param waypointTarget the next position that the ignorant has to reach
 * @param faithPoints the level of faithPoints of the ignorant
 * @returns the created Actor of kind "ignorant"
 */ function $19b66a49a5ef583a$export$e0057f1765d35661(position, waypointTarget, faithPoints = 100) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(waypointTarget);
    return (0, $29b50ff5dbf23222$export$dcd77d6350f26a96)((0, $29b50ff5dbf23222$export$e487a656e9fd96f2)((0, $29b50ff5dbf23222$export$37f6afb282f558d2)($19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {
        move: (0, $40510ba8f0a373f5$export$9ebd3ce208f36c29)((0, $01f49ebe73462dbb$export$6998ddfcfd0cda18), (0, $01f49ebe73462dbb$export$39cd167cbcb283e3)["move"], 2)
    }, {
        move: (0, $01f49ebe73462dbb$export$6998ddfcfd0cda18),
        temperatureRise: $01f49ebe73462dbb$export$4e1dd93b0eb1e002,
        enemyFlee: $01f49ebe73462dbb$export$16d7f95031fcf492
    }, "ignorant"), 10), faithPoints, 100), waypointTarget, 1);
}
/**
 * Constructor for a default "ignoranceSpreader" actor
 * @param position the position where the ignoranceSpreader is in the world
 * @param waypointTarget the next position that the ignoranceSpreader has to reach
 * @param faithPoints the level of faithPoints of the ignoranceSpreader
 * @param spreadIgnorancePower this value indicates how much the created "ignoranceSpreader" can increase the faith of the "ignorant" actors
 * in its range
 * @param range the range in which the ignoranceSpreader can affect the ignorants
 * @returns the created Actor of kind "ignoranceSpreader"
 */ function $19b66a49a5ef583a$export$22a77489e2d2210a(position, waypointTarget, faithPoints = 70, spreadIgnorancePower = 5, range = 3) {
    (0, $40510ba8f0a373f5$export$fc30a1099bd4c458)(waypointTarget);
    return (0, $29b50ff5dbf23222$export$dcd77d6350f26a96)((0, $29b50ff5dbf23222$export$e487a656e9fd96f2)((0, $29b50ff5dbf23222$export$293a62676c2eae72)((0, $29b50ff5dbf23222$export$9644c4f5061d3b67)($19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {}, {
        move: (0, $01f49ebe73462dbb$export$6998ddfcfd0cda18),
        spreadIgnorance: $01f49ebe73462dbb$export$85c736e3ae64031c,
        enemyFlee: $01f49ebe73462dbb$export$16d7f95031fcf492
    }, "ignoranceSpreader"), range), spreadIgnorancePower), faithPoints, 70), waypointTarget, 1);
}
/**
 * Constructors for the Actors that can move by themselves during the move Phase.
 * The elements of the dictionnary are constrained by the type {@link WalkerCreator}
 */ const $19b66a49a5ef583a$var$walkerCreator = {
    ignorant: $19b66a49a5ef583a$export$e0057f1765d35661,
    ignoranceSpreader: $19b66a49a5ef583a$export$22a77489e2d2210a
};
/**
 * Generic fonction called to create Actors that can move by themselves during the move Phase.
 * Those Actors are listed in the type {@link Walker}.
 * @param kind the kind of the created Actor
 * @param path the waypoints constraining the path on which the Actor will move
 * @param position the position of the created Actor
 * @param faithPoints the faithPoints of the created Actor
 * @returns the created Actor whose kind is listed in the type {@link Walker}
 */ function $19b66a49a5ef583a$export$774c92c6aec941e8(kind, path, position, faithPoints) {
    const firstWaypoint = (0, $d2969b5a047bb891$export$cf903b528c3fad7f)(path, position, 0);
    return $19b66a49a5ef583a$var$walkerCreator[kind](position, firstWaypoint.waypointTarget, faithPoints);
}
/**
 * Constructor for a default "spawner" actor
 * @param position the position where the spawner is in the world
 * @param spawnProba number in [0, 1] representing the probability during each spawn phase to create a new Actor
 * @returns the created Actor of kind "spawner"
 */ function $19b66a49a5ef583a$export$2dc1cea545bc4a63(position, spawnProba = 0.3) {
    return (0, $29b50ff5dbf23222$export$5efb8d72daa73137)((0, $29b50ff5dbf23222$export$134435ab3fd43f21)($19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {}, {
        spawn: $01f49ebe73462dbb$export$1713f5ac2bf0caf5
    }, "spawner"), 0), spawnProba);
}
/**
 * Constructor for a default "ground" actor
 * @param position the position of the ground
 * @param waypointNumber the number indexing the order in which the waypoints have to be reached
 * @returns the created Actor of kind "ground"
 */ function $19b66a49a5ef583a$export$eff3a6d8dbcf7973(position, waypointNumber) {
    return waypointNumber ? (0, $29b50ff5dbf23222$export$134435ab3fd43f21)($19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {}, {}, "ground"), waypointNumber) : $19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {}, {}, "ground");
}
/**
 * Constructor for a default "goodGuy" actor
 * @param position the position of the goodGuy
 * @param range the range in which the goodGuy can affect the walkers
 * @param conviction the conviction defines how impacting the goodGuy is on the walkers
 * @returns the created Actor of kind "goodGuy"
 */ function $19b66a49a5ef583a$export$c0ba8176670132f(position, range = 2, conviction = 9) {
    return (0, $29b50ff5dbf23222$export$9644c4f5061d3b67)((0, $29b50ff5dbf23222$export$37f6afb282f558d2)($19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {}, {
        convertEnemies: $01f49ebe73462dbb$export$64d1efd965fa7dae
    }, "goodGuy"), conviction), range);
}
/**
 * Constructor for a default "spaghettiMonster" actor
 * @param position the position of the goodGuy
 * @param waypointNumber the number indexing the order in which the waypoints (including the spaghettiMonster) have to be reached
 * @param faithPoints the faith of the spaghettiMonster. The game is lost when its faithPoints reach 0.
 * @returns the created Actor of kind "spaghettiMonster"
 */ function $19b66a49a5ef583a$export$f8781c1d5fbdc260(position, waypointNumber, faithPoints = 100) {
    return (0, $29b50ff5dbf23222$export$134435ab3fd43f21)((0, $29b50ff5dbf23222$export$382aa2279ad1f558)((0, $29b50ff5dbf23222$export$2f1b9f487eed2e82)($19b66a49a5ef583a$export$cb2bc87933ecfd63(position, {}, {}, "spaghettiMonster"), 100), faithPoints), waypointNumber);
}
/**
 * Constructor for a default "player" actor
 * @param playProba the probability for the player to play, for each play Phase
 * @returns the created Actor of kind "player"
 */ function $19b66a49a5ef583a$export$11ae10a4ef8c3aa4(playProba = 0.25) {
    return (0, $29b50ff5dbf23222$export$96bdea7d5efd5711)($19b66a49a5ef583a$export$cb2bc87933ecfd63((0, $5d1a0b0fa44ed72f$export$ec7bcaa04c6fc5f7)(0, 0), {}, {
        play: (0, $01f49ebe73462dbb$export$899fbdb5fa08b653)
    }, "player"), playProba);
}



/**
 * Constructor for a phase
 * @param funcName The name of the phase
 * @param executePhase The function that computes the new actor array according to the results of the phase from all the actors
 * @returns A new phase
 */ function $f0d846b1b9e9241a$export$893b2fb567effb9e(funcName, executePhase) {
    return {
        funcName: funcName,
        executePhase: executePhase
    };
}







/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */ function $5897df866562d042$export$7c585466e25bca65(oldActors, phaseResult) {
    return oldActors.concat(phaseResult.filter((returnedActor)=>returnedActor !== undefined));
}
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */ function $5897df866562d042$export$3991e5dfe06304d8(oldActors, phaseResult) {
    return oldActors.concat(phaseResult.filter((returnedVector)=>returnedVector !== undefined).map((vector)=>(0, $19b66a49a5ef583a$export$c0ba8176670132f)(vector)));
}
/**
 * The executePhase function for the "temperatureRise" phase.
 * It inflicts "damage" to the Spaghetti Monster, our defense target.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "temperatureRise" phase
 */ function $5897df866562d042$export$82d9d940986f3b5b(oldActors, phaseResult) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return oldActors.map((currentActor)=>(0, $d2969b5a047bb891$export$89d23cb4210231c)(currentActor, [
            "spaghettiMonster"
        ]) ? (0, $29b50ff5dbf23222$export$382aa2279ad1f558)(currentActor, (0, $29b50ff5dbf23222$export$18ae7b999fbafd43)(currentActor) - (0, $18ac3fdcce69be77$export$8a63f25cc62965f1)(phaseResult)) : currentActor);
}
/**
 * The executePhase function for the "move" phase.
 * It makes the given actors move along the path generated from the spawners to the spaghettiMonsters
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "move" phase
 */ function $5897df866562d042$export$158f0d87d825c3fa(oldActors, phaseResults) {
    return phaseResults.map((phaseResult, actorIndex)=>{
        const newActor = (0, $d2969b5a047bb891$export$46a2484a86dc23aa)(oldActors, oldActors[actorIndex], phaseResult);
        return {
            ...newActor,
            actions: {
                ...newActor.actions,
                move: newActor.actionGenerators["move"][1]
            },
            actionGenerators: {
                ...newActor.actionGenerators,
                move: newActor.actionGenerators["move"][0]()
            }
        };
    });
}
/**
 * Returns the given actor, with its ignorance updated by taking into consideration the spreadConvictionResults
 * @param actor the actor whose ignorance must be updated using the spreadConvictionResults
 * @param actorIndex the index by which the actor is referenced in spreadConvictionResults.impactedActorsIndices
 * @param spreadConvictionResults array of objects containing unique indices referencing the actor to update, and the
 * values by which the ignorance of the actors are impacted
 * @returns the given actor, with its ignorance updated by taking into consideration the spreadConvictionResults
 */ function $5897df866562d042$var$updateIgnorance(actor, actorIndex, spreadConvictionResults) {
    return (0, $29b50ff5dbf23222$export$382aa2279ad1f558)(actor, Math.min(spreadConvictionResults.reduce((ignoranceAcc, spreadIgnoranceResult)=>ignoranceAcc + (spreadIgnoranceResult.impactAmounts[spreadIgnoranceResult.impactedActorsIndices.indexOf(actorIndex)] ?? 0), (0, $29b50ff5dbf23222$export$18ae7b999fbafd43)(actor)), (0, $29b50ff5dbf23222$export$e5a7ab89a57f6d2c)(actor)));
}
/**
 * The executePhase function for the phase about converting people to a religion.
 * Ignorants can get slowly converted to our holy faith; pastafarism, or they could be comforted in their ignorance...
 * @param oldActors The actors before the phase
 * @param spreadConvictionVectors The results of the phase
 * @returns A proposal for the actors after executing the "convertEnemies" phase
 */ function $5897df866562d042$export$6ba02bb4efd4313c(oldActors, spreadConvictionVectors) {
    return oldActors.map((currentActor, actorIndex)=>(0, $d2969b5a047bb891$export$89d23cb4210231c)(currentActor, [
            ...(0, $d2969b5a047bb891$export$6c184939f519c8bc),
            "spaghettiMonster"
        ]) ? $5897df866562d042$var$updateIgnorance(currentActor, actorIndex, spreadConvictionVectors) : currentActor);
}
/**
 * The executePhase function for the "enemyFlee" phase.
 * It removes the actors that have decided to not exist anymore.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "enemyFlee" phase
 */ function $5897df866562d042$export$d2037b2adfe6b312(oldActors, phaseResult) {
    return oldActors.filter((a, i)=>!phaseResult[i]);
}





/**
 * Initializes a new world to the given width and height where 0 turns
 * have elapsed.
 * @param width the width
 * @param height the height
 * @returns A brand new world where 0 turns have elapsed
 */ function $8aaa40018df40525$export$34231796b5b05131(width, height) {
    return (0, $c8000e650ca2b19e$export$bd9127779b59056d)(width, height);
}
/**
 * @returns The array of phases
 */ function $8aaa40018df40525$export$f8c8f4577fc1b304() {
    return [
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("spawn", (0, $5897df866562d042$export$7c585466e25bca65)),
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("temperatureRise", (0, $5897df866562d042$export$82d9d940986f3b5b)),
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("convertEnemies", (0, $5897df866562d042$export$6ba02bb4efd4313c)),
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("spreadIgnorance", (0, $5897df866562d042$export$6ba02bb4efd4313c)),
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("move", (0, $5897df866562d042$export$158f0d87d825c3fa)),
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("play", (0, $5897df866562d042$export$3991e5dfe06304d8)),
        (0, $f0d846b1b9e9241a$export$893b2fb567effb9e)("enemyFlee", (0, $5897df866562d042$export$d2037b2adfe6b312))
    ];
}
/**
 * Randomly initializes spawners
 * @param world the world where the spawners are created
 * @param minSpawners the minimum number of returned spawners
 * @param maxSpawners the maximum number of returned spawners
 * @param spawnersParallelAxis the returned spawners can reach each other by a translation along this axis
 * @param spawnerLineNumber the coordinate of the returned position on the not-given axis
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns an array of 1 to maxSpawners spawners with unique positions, that all have the same coordinate value on the axis that was not given
 * and that have the same probability of making someone spawn per spawn phase.
 */ function $8aaa40018df40525$export$f22d0d0f4387c50(world, minSpawners, maxSpawners, spawnersParallelAxis, spawnerLineNumber, averageSpawnsPerPhase = 0.6) {
    if (minSpawners < 1) throw new Error("There should be at least one spawner in the game.");
    const spawnersPerpendicularAxisCoord = (0, $5165d77636d73d76$export$5bbc50fbda1e9adc)(minSpawners, maxSpawners, 0, spawnersParallelAxis === "x" ? world.width : world.height);
    const spawnProba = averageSpawnsPerPhase / spawnersPerpendicularAxisCoord.length;
    return (0, $c8000e650ca2b19e$export$8db8e48c4eea7a7b)(spawnersParallelAxis, spawnersPerpendicularAxisCoord, spawnerLineNumber).map((spawnerPosition)=>(0, $19b66a49a5ef583a$export$2dc1cea545bc4a63)(spawnerPosition, spawnProba));
}
/**
 * Randomly initializes grounds
 * @param world the world where the grounds are created
 * @param minGroundsPerLine the minimum number of created grounds per line along the groundsAxis
 * @param maxGroundsPerLine the maximum number of created grounds per line along the groundsAxis
 * @param groundsAxis the returned grounds can reach each other by a translation along this axis
 * @param groundLineNumbers the coordinates of the returned positions on the not-given axis (for each line where ground are created)
 * @param numberOfGroundLines The number of lines of grounds (in groundsAxis direction) where grounds are created
 * @returns an array of numberOfGroundLines to maxGroundsPerLine * numberOfGroundLines grounds with unique positions
 */ function $8aaa40018df40525$export$cc4a9359e7b97e13(world, minGroundsPerLine, maxGroundsPerLine, groundsAxis, groundLineNumbers, numberOfGroundLines) {
    return Array.from({
        length: numberOfGroundLines
    }, (_, index)=>(0, $c8000e650ca2b19e$export$1b9225b974b88e4d)(world, minGroundsPerLine, maxGroundsPerLine, groundsAxis, groundLineNumbers[index]).map((groundPosition)=>(0, $19b66a49a5ef583a$export$eff3a6d8dbcf7973)(groundPosition, index + 1)));
}
/**
 * Randomly initializes spaghettiMonsters
 * @param world the world where the spaghettiMonsters are created
 * @param minSpaghettiMonsters the minimum number of returned spaghettiMonsters
 * @param maxSpaghettiMonsters the maximum number of returned spaghettiMonsters
 * @param spaghettiMonstersAxis the returned spaghettiMonsters can reach each other by a translation along this axis
 * @param spaghettiMonstersLineNumber the coordinate of the returned position on the not-given axis
 * @param waypointNumber the waypointNumber of the spaghettiMonsters
 * @returns an array of 1 to maxSpaghettiMonsters spaghettiMonsters with unique positions, that all have the same coordinate value on the axis that was not given
 */ function $8aaa40018df40525$var$initspaghettiMonsters(world, minSpaghettiMonsters, maxSpaghettiMonsters, spaghettiMonstersAxis, spaghettiMonstersLineNumber, waypointNumber) {
    return (0, $c8000e650ca2b19e$export$1b9225b974b88e4d)(world, minSpaghettiMonsters, maxSpaghettiMonsters, spaghettiMonstersAxis, spaghettiMonstersLineNumber).map((spaghettiMonsterPosition)=>(0, $19b66a49a5ef583a$export$f8781c1d5fbdc260)(spaghettiMonsterPosition, waypointNumber));
}
/**
 * Randomly creates the waypoints of the world (creates spawners, ground, and spaghettiMonster)
 * @param world the world on which the waypoints are created
 * @param intermediateWaypointsNumber the number of waypoints that have to be reached by the moving actors (spawner and spaghettiMonster not included)
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns the created waypoints of the world
 */ function $8aaa40018df40525$var$initWayPointActors(world, intermediateWaypointsNumber, spawnersAxis, averageSpawnsPerPhase, minSpawners = 1, maxSpawners = 3) {
    const maxLineNumber = spawnersAxis === "x" ? world.height - 1 : world.width - 1;
    const spawnerLineNumber = Math.random() < 0.5 ? 0 : maxLineNumber;
    const spaghettiMonsterLineNumber = maxLineNumber - spawnerLineNumber;
    const intermediateWaypointsLineNumber = (0, $5165d77636d73d76$export$aef1c139bbab4a94)(intermediateWaypointsNumber, spaghettiMonsterLineNumber ? 0 : maxLineNumber, spaghettiMonsterLineNumber);
    return [
        $8aaa40018df40525$export$f22d0d0f4387c50(world, minSpawners, maxSpawners, spawnersAxis, spawnerLineNumber, averageSpawnsPerPhase)
    ].concat($8aaa40018df40525$export$cc4a9359e7b97e13(world, 1, Math.random() < 0.7 ? 2 : 1, spawnersAxis, intermediateWaypointsLineNumber, intermediateWaypointsNumber)).concat([
        $8aaa40018df40525$var$initspaghettiMonsters(world, 1, 1, spawnersAxis, spaghettiMonsterLineNumber, intermediateWaypointsNumber + 1)
    ]);
}
/**
 * Initializes the actors. Should be used at the beginning of the game
 * @param world the world where the actors are created
 * @param intermediateWaypointLinesNumber the number of waypoints that the actors need to cross between the spawners and the spaghettiMonsters
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns the first actors of the game.
 */ function $8aaa40018df40525$export$2d9df8929a7ca7b6(world, intermediateWaypointLinesNumber, spawnersAxis, averageSpawnsPerPhase, playProba, minSpawners, maxSpawners) {
    const waypoints = $8aaa40018df40525$var$initWayPointActors(world, intermediateWaypointLinesNumber, spawnersAxis, averageSpawnsPerPhase, minSpawners, maxSpawners);
    return waypoints.flat().concat((0, $5d1a0b0fa44ed72f$export$e331a6d5fd702cb4)(waypoints.map((waypointsSameValue)=>waypointsSameValue.map((waypoint)=>waypoint.position)), (0, $40510ba8f0a373f5$export$c4a9a14cbc132f19)(spawnersAxis)).map((position)=>(0, $19b66a49a5ef583a$export$eff3a6d8dbcf7973)(position))).concat((0, $19b66a49a5ef583a$export$11ae10a4ef8c3aa4)(playProba));
}
/**
 * Ensures all proposed actors are in a valid state and if they are not, resolves the conflict
 * @param world The world where the actors are
 * @param actors The state of the actors before the proposal of their new state was made
 * @param proposals We want to know if these actors are valid
 * @returns An array of actor with valid states and no conflicts
 */ function $8aaa40018df40525$var$resolveProposals(world, actors, proposals) {
    return proposals.reduce((acc, currentProposal, actorIndex)=>{
        if (currentProposal === undefined) throw new Error("undefined actor");
        if ((0, $d2969b5a047bb891$export$7cf70fd7ea9208c3)(world, currentProposal)) {
            if ((0, $d2969b5a047bb891$export$510f060e28b92e66)(currentProposal) && !(0, $d2969b5a047bb891$export$4522764b05bf041)(actors, [
                "ground",
                "spawner",
                "spaghettiMonster"
            ]).find((currentGround)=>(0, $40510ba8f0a373f5$export$5285172931ab13f4)(currentGround.position, currentProposal.position))) return acc;
            return acc.concat(currentProposal);
        }
        return acc;
    }, []);
}
/**
 * Computes the next turn of a world according to its phases and actors.
 * @param phases The phases
 * @param world The world
 * @param actors The actors
 * @param spawnersAxis The axis that is parallel to the line that links the spawners
 * @returns A new array of actors
 */ function $8aaa40018df40525$export$ee1d0773a46de8fb(phases, world, actors, spawnersAxis) {
    return phases.reduce((actorsAcc, aPhase)=>{
        const proposals = aPhase.executePhase(actorsAcc, actorsAcc.map((actingActor)=>actingActor.actions[aPhase.funcName]({
                actorsAcc: actorsAcc,
                actingActor: actingActor,
                world: world,
                spawnersAxis: spawnersAxis
            }) /* ReturnType<ActorActions[keyof ActorActions]> */ ));
        return $8aaa40018df40525$var$resolveProposals(world, actorsAcc, proposals);
    }, actors);
}
/**
 * A function that plays the game and displays its state at every turn.
 * @param display The display function that displays a world and its actors
 */ function $8aaa40018df40525$export$374e00631f623609(display) {
    const world = $8aaa40018df40525$export$34231796b5b05131(10, 10);
    const spawnersAxis = Math.random() < 0.5 ? "x" : "y";
    const playProba = 0.25;
    const spawnProba = 1;
    const intermediateWaypointLinesNumber = 2;
    let actors = $8aaa40018df40525$export$2d9df8929a7ca7b6(world, intermediateWaypointLinesNumber, spawnersAxis, spawnProba, playProba);
    const phases = $8aaa40018df40525$export$f8c8f4577fc1b304();
    console.log(`\n\x1b[32m PASTAFARIST \x1b[0m\n`);
    let turnCounter = 0; // in a purely functional way, an actor containing the turns combined with an incrementTurn action and an updateTurn phase could be made
    const maxTurn = 20;
    while(turnCounter < maxTurn && (0, $d2969b5a047bb891$export$4522764b05bf041)(actors, [
        "spaghettiMonster"
    ]).some((spaghettiMonster)=>(0, $29b50ff5dbf23222$export$18ae7b999fbafd43)(spaghettiMonster) > 0)){
        display(world, actors);
        actors = $8aaa40018df40525$export$ee1d0773a46de8fb(phases, world, actors, spawnersAxis);
        ++turnCounter;
    }
    display(world, actors);
    if ((0, $d2969b5a047bb891$export$4522764b05bf041)(actors, [
        "spaghettiMonster"
    ]).some((spaghettiMonster)=>(0, $29b50ff5dbf23222$export$18ae7b999fbafd43)(spaghettiMonster) > 0)) console.log("Some spaghetti monsters still have faith, you won the game! :)");
    else console.log("Not a single spaghetti monsters still has faith, you lost the game! :(");
}


/**
 * Displays a game in text format
 * @param world the world of the game
 * @param actors the actors of the game
 */ function $b013a5dd6d18443e$var$displayGame(world, actors) {
    console.log(`\x1b[31m${"-".repeat(world.width * 2)}\x1b[0m`);
    console.log(actors.reduce((acc, actor)=>(0, $d2969b5a047bb891$export$526eada18a494618)(world, acc, actor), (0, $c8000e650ca2b19e$export$b40ca192d81d6835)(world)));
    console.log(`\x1b[31m${"-".repeat(world.width * 2)}\x1b[0m\n`);
}
(0, $8aaa40018df40525$export$374e00631f623609)($b013a5dd6d18443e$var$displayGame);


//# sourceMappingURL=main.js.map
