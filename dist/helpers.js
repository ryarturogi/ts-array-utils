"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isNumber = exports.deepEqual = exports.sortObjectArray = exports.sortStringArray = exports.sortNumberArray = void 0;
function sortNumberArray(array, direction) {
    return array.sort((a, b) => (direction === 'asc' ? a - b : b - a));
}
exports.sortNumberArray = sortNumberArray;
function sortStringArray(array, direction) {
    return array.sort((a, b) => direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a));
}
exports.sortStringArray = sortStringArray;
function sortObjectArray(array, direction, sortBy) {
    if (sortBy) {
        return array.sort((a, b) => {
            if (direction === 'asc') {
                return a[sortBy].toString().localeCompare(b[sortBy].toString());
            }
            else {
                return b[sortBy].toString().localeCompare(a[sortBy].toString());
            }
        });
    }
    else {
        if (direction === 'asc') {
            return array.sort((a, b) => {
                return JSON.stringify(a).localeCompare(JSON.stringify(b));
            });
        }
        else {
            return array.sort((a, b) => {
                return JSON.stringify(b).localeCompare(JSON.stringify(a));
            });
        }
    }
}
exports.sortObjectArray = sortObjectArray;
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a === null || a === undefined || b === null || b === undefined) {
        return false;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a !== 'object') {
        return false;
    }
    if (Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) {
        return false;
    }
    for (const key of keys) {
        if (!deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
exports.deepEqual = deepEqual;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
exports.isObject = isObject;
