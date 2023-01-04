"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.distinct = exports.average = exports.sum = exports.max = exports.min = exports.includes = exports.transform = exports.filter = exports.sort = exports.order = void 0;
const sorting_algorithms_1 = require("./sorting-algorithms");
const order = (array, direction, sortBy) => {
    if (direction === 'asc') {
        return array.sort((a, b) => a[sortBy] - b[sortBy]);
    }
    else {
        return array.sort((a, b) => b[sortBy] - a[sortBy]);
    }
};
exports.order = order;
function sort(array, direction = 'asc', sortBy) {
    let results = [];
    // Use the quicksort algorithm for large arrays
    if (array.length > 1000) {
        results = (0, sorting_algorithms_1.quicksort)(array);
    }
    else {
        results = (0, sorting_algorithms_1.insertionSort)(array);
    }
    // Sort the array
    return (0, exports.order)(results, direction, sortBy);
}
exports.sort = sort;
function filter(array, predicate) {
    return array.filter(predicate);
}
exports.filter = filter;
function transform(array, transformer) {
    return array.map(transformer);
}
exports.transform = transform;
function includes(array, element) {
    return array.indexOf(element) !== -1;
}
exports.includes = includes;
function min(array) {
    return array.length ? Math.min(...array) : undefined;
}
exports.min = min;
function max(array) {
    return array.length ? Math.max(...array) : undefined;
}
exports.max = max;
function sum(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
}
exports.sum = sum;
function average(array) {
    return array.length ? sum(array) / array.length : 0;
}
exports.average = average;
function distinct(array) {
    return Array.from(new Set(array));
}
exports.distinct = distinct;
function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
exports.shuffle = shuffle;
