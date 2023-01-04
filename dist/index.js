"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.distinct = exports.average = exports.sum = exports.max = exports.min = exports.includes = exports.transform = exports.filter = exports.sort = void 0;
function sort(array) {
    return array.sort((a, b) => a - b);
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
