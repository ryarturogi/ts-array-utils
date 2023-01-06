"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.distinct = exports.average = exports.sum = exports.max = exports.min = exports.includes = exports.transform = exports.filter = exports.sort = void 0;
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
