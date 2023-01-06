"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBy = exports.range = exports.repeat = exports.pad = exports.merge = exports.insert = exports.remove = exports.findLast = exports.findFirst = exports.reverseFill = exports.fill = exports.move = exports.swap = exports.isEqual = exports.isSorted = exports.mirror = exports.flip = exports.rotate = exports.unzip = exports.zip = exports.countOccurrences = exports.standardDeviation = exports.variance = exports.mode = exports.median = exports.mean = exports.randomSample = exports.chunk = exports.removeDuplicates = exports.difference = exports.intersection = exports.partition = exports.groupBy = exports.uniqueElements = exports.flattenArray = exports.shuffle = exports.distinct = exports.average = exports.sum = exports.max = exports.min = exports.includes = exports.transform = exports.filter = exports.sort = void 0;
const helpers_1 = require("./helpers");
const sorting_algorithms_1 = require("./sorting-algorithms");
function sort(array, direction = 'asc', sortBy = '') {
    let results = array;
    const isNumberArray = typeof array[0] === 'number';
    const isStringArray = typeof array[0] === 'string';
    if (array.length > 1000) {
        results = (0, sorting_algorithms_1.quicksort)(array, sortBy);
    }
    else {
        results = (0, sorting_algorithms_1.insertionSort)(array, sortBy);
    }
    if (isNumberArray) {
        return (0, helpers_1.sortNumberArray)(results, direction);
    }
    else if (isStringArray) {
        return (0, helpers_1.sortStringArray)(results, direction);
    }
    else {
        return (0, helpers_1.sortObjectArray)(results, direction, sortBy);
    }
}
exports.sort = sort;
function filter(array, predicate) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}
exports.filter = filter;
function transform(array, transformer = (x) => x) {
    return array.map((x) => {
        if (typeof x === 'number') {
            return transformer(x);
        }
        else {
            return x;
        }
    });
}
exports.transform = transform;
function includes(arr, element) {
    for (const el of arr) {
        if (Array.isArray(el)) {
            const result = includes(el, element);
            if (result !== undefined) {
                return result;
            }
        }
        else if ((0, helpers_1.deepEqual)(el, element)) {
            return el;
        }
    }
    return undefined;
}
exports.includes = includes;
function min(array, key) {
    if (!array.length)
        return undefined;
    if (key) {
        return array.reduce((acc, cur) => (cur[key] < acc[key] ? cur : acc));
    }
    else {
        return Math.min(...array);
    }
}
exports.min = min;
function max(array, key) {
    if (!array.length)
        return undefined;
    if (key) {
        return array.reduce((acc, cur) => (cur[key] > acc[key] ? cur : acc));
    }
    else {
        return Math.max(...array);
    }
}
exports.max = max;
function sum(array) {
    return array.reduce((acc, cur) => {
        switch (true) {
            case typeof cur === 'number':
                return acc + cur;
            case Array.isArray(cur):
                return acc + sum(cur);
            case typeof cur === 'object' && 'value' in cur:
                return acc + cur.value;
            case typeof cur === 'string' && !isNaN(Number(cur)):
                return acc + Number(cur);
            default:
                return acc;
        }
    }, 0);
}
exports.sum = sum;
function average(obj) {
    let sum = 0;
    let count = 0;
    for (const value of Object.values(obj)) {
        if ((0, helpers_1.isNumber)(value)) {
            sum += value;
            count++;
        }
        else if (typeof value === 'string' && !isNaN(Number(value))) {
            sum += Number(value);
            count++;
        }
        else if ((0, helpers_1.isObject)(value)) {
            const avg = average(value);
            sum += avg * Object.keys(value).length;
            count += Object.keys(value).length;
        }
    }
    return count ? sum / count : 0;
}
exports.average = average;
function distinct(array) {
    if (!Array.isArray(array))
        return [];
    if (array.every((x) => typeof x === 'object')) {
        return [...new Set(array.map((x) => JSON.stringify(x)))].map((x) => JSON.parse(x));
    }
    if (array.some((x) => Array.isArray(x))) {
        return [...new Set(array.flat())];
    }
    return [...new Set(array)];
}
exports.distinct = distinct;
function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
exports.shuffle = shuffle;
function flattenArray(array) {
    return array.reduce((flat, next) => flat.concat(Array.isArray(next) ? flattenArray(next) : next), []);
}
exports.flattenArray = flattenArray;
function uniqueElements(array) {
    return Array.from(new Set(array));
}
exports.uniqueElements = uniqueElements;
function groupBy(array, callback) {
    return array.reduce((groups, element) => {
        const key = callback(element);
        groups[key] = groups[key] || [];
        groups[key].push(element);
        return groups;
    }, {});
}
exports.groupBy = groupBy;
function partition(array, callback) {
    return array.reduce((partitions, element) => {
        partitions[callback(element) ? 0 : 1].push(element);
        return partitions;
    }, [[], []]);
}
exports.partition = partition;
function intersection(array1, array2) {
    return array1.filter((element) => array2.includes(element));
}
exports.intersection = intersection;
function difference(array1, array2) {
    return array1.filter((element) => !array2.includes(element));
}
exports.difference = difference;
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
}
exports.removeDuplicates = removeDuplicates;
function chunk(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}
exports.chunk = chunk;
function randomSample(array, size) {
    const sample = [];
    for (let i = 0; i < size; i++) {
        const index = Math.floor(Math.random() * array.length);
        sample.push(array[index]);
    }
    return sample;
}
exports.randomSample = randomSample;
function mean(array) {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
}
exports.mean = mean;
function median(array) {
    array.sort((a, b) => a - b);
    const middle = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2;
    }
    else {
        return array[middle];
    }
}
exports.median = median;
function mode(array) {
    const frequency = {};
    let maxFrequency = 0;
    let mode = array[0];
    for (const element of array) {
        frequency[element] = (frequency[element] || 0) + 1;
        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mode = element;
        }
    }
    return mode;
}
exports.mode = mode;
function variance(array) {
    // check if array is empty
    if (array.length === 0) {
        return 0;
    }
    // check if array has nested objects
    if ((0, helpers_1.isArrayOfObjects)(array)) {
        const key = arguments[1];
        const values = array.map((obj) => obj[key]);
        return variance(values);
    }
    // check if array has strings
    if ((0, helpers_1.isArrayOfStrings)(array)) {
        return NaN;
    }
    // check if array has numbers
    if ((0, helpers_1.isArrayOfNumbers)(array)) {
        const mean = array.reduce((a, b) => a + b) / array.length;
        const squaredDifferences = array.map((num) => Math.pow(num - mean, 2));
        return squaredDifferences.reduce((a, b) => a + b) / array.length;
    }
    // check if array has nested arrays
    if ((0, helpers_1.isArrayOfArrays)(array)) {
        const flattened = array.flat();
        return variance(flattened);
    }
    // calculate the mean
    const mean = array.reduce((a, b) => a + b) / array.length;
    // calculate the squared differences
    const squaredDifferences = array.map((num) => Math.pow(num - mean, 2));
    // calculate the variance
    return squaredDifferences.reduce((a, b) => a + b) / array.length;
}
exports.variance = variance;
function standardDeviation(array) {
    return Math.sqrt(variance(array));
}
exports.standardDeviation = standardDeviation;
function countOccurrences(array, element) {
    return array.reduce((count, current) => (current === element ? count + 1 : count), 0);
}
exports.countOccurrences = countOccurrences;
function zip(...arrays) {
    const maxLength = Math.max(...arrays.map((array) => array.length));
    return Array.from({ length: maxLength }).map((_, index) => arrays.map((array) => array[index]));
}
exports.zip = zip;
function unzip(array) {
    return array[0].map((_, index) => array.map((array) => array[index]));
}
exports.unzip = unzip;
function rotate(array, positions) {
    const rotated = array.slice();
    for (let i = 0; i < positions; i++) {
        rotated.unshift(rotated.pop());
    }
    return rotated;
}
exports.rotate = rotate;
function flip(array) {
    return array.reverse();
}
exports.flip = flip;
function mirror(array) {
    return array.concat(array.slice().reverse());
}
exports.mirror = mirror;
function isSorted(array) {
    return array.every((element, index) => index > 0 ? element >= array[index - 1] : true);
}
exports.isSorted = isSorted;
function isEqual(array1, array2) {
    return (array1.length === array2.length &&
        array1.every((element, index) => element === array2[index]));
}
exports.isEqual = isEqual;
function swap(array, index1, index2) {
    ;
    [array[index1], array[index2]] = [array[index2], array[index1]];
}
exports.swap = swap;
function move(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
}
exports.move = move;
function fill(array, value) {
    for (let i = 0; i < array.length; i++) {
        array[i] = value;
    }
}
exports.fill = fill;
function reverseFill(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i] = value;
    }
}
exports.reverseFill = reverseFill;
function findFirst(array, callback) {
    for (const element of array) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
}
exports.findFirst = findFirst;
function findLast(array, callback) {
    return findFirst(array.slice().reverse(), callback);
}
exports.findLast = findLast;
function remove(array, index, count) {
    array.splice(index, count);
}
exports.remove = remove;
function insert(array, index, ...elements) {
    array.splice(index, 0, ...elements);
}
exports.insert = insert;
function merge(array1, array2) {
    return array1.concat(array2);
}
exports.merge = merge;
function pad(array, padding, repeat) {
    return [
        ...new Array(repeat).fill(padding),
        ...array,
        ...new Array(repeat).fill(padding),
    ];
}
exports.pad = pad;
function repeat(element, repeat) {
    return new Array(repeat).fill(element);
}
exports.repeat = repeat;
function range(array) {
    array.sort((a, b) => a - b);
    return [array[0], array[array.length - 1]];
}
exports.range = range;
function countBy(array, callback) {
    return array.reduce((counts, element) => {
        const key = callback(element);
        counts[key] = (counts[key] || 0) + 1;
        return counts;
    }, {});
}
exports.countBy = countBy;
