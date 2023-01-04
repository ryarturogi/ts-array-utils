"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = exports.insertionSort = void 0;
function insertionSort(array, sortBy) {
    if (array.length < 2) {
        return array;
    }
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (!element.hasOwnProperty(sortBy)) {
            throw new Error(`Invalid element at index ${i}: ${element}`);
        }
        const sortValue = element[sortBy];
        for (let j = 0; j < i; j++) {
            if (!array[j].hasOwnProperty(sortBy)) {
                throw new Error(`Invalid element at index ${j}: ${array[j]}`);
            }
            if (sortValue < array[j][sortBy]) {
                array[i] = array[j];
                array[j] = element;
            }
        }
    }
    return array;
}
exports.insertionSort = insertionSort;
function quicksort(array, sortBy) {
    if (array.length < 2) {
        return array;
    }
    const pivotIndex = getPivotIndex(array);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== pivotIndex) {
            const value = array[i];
            if (value[sortBy] < pivot[sortBy]) {
                left.push(value);
            }
            else {
                right.push(value);
            }
        }
    }
    return [...quicksort(left, sortBy), pivot, ...quicksort(right, sortBy)];
}
exports.quicksort = quicksort;
function getPivotIndex(array) {
    const length = array.length;
    if (length <= 3) {
        return length - 1;
    }
    const middle = Math.floor(length / 2);
    if (array[0] < array[middle] && array[middle] < array[length - 1]) {
        return middle;
    }
    else if (array[0] < array[length - 1] &&
        array[length - 1] < array[middle]) {
        return length - 1;
    }
    else {
        return 0;
    }
}
