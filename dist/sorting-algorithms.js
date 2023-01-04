"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = exports.insertionSort = void 0;
function insertionSort(array, sortBy) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let current = array[i];
        while (j >= 0 && current[sortBy] < array[j][sortBy]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}
exports.insertionSort = insertionSort;
function quicksort(array, sortBy) {
    // Use insertion sort for small arrays
    if (array.length <= 10) {
        return insertionSort(array, sortBy);
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex)
            continue;
        if (array[i][sortBy] < pivot[sortBy]) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return [...quicksort(left, sortBy), pivot, ...quicksort(right, sortBy)];
}
exports.quicksort = quicksort;
