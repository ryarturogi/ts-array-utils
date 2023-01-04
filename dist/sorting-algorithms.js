"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = exports.insertionSort = void 0;
function insertionSort(array, sortBy = 'value') {
    if (array.length <= 1) {
        return array;
    }
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== 'object') {
            throw new Error(`Invalid element at index ${i}: ${array[i]}`);
        }
        let j = i;
        while (j > 0 && array[j][sortBy] < array[j - 1][sortBy]) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    return array;
}
exports.insertionSort = insertionSort;
function quicksort(array, sortBy = 'value') {
    // Use insertion sort for small arrays
    if (array.length <= 10) {
        return insertionSort(array, sortBy);
    }
    // Select pivot as median value
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex][sortBy];
    // Partition the array into left and right subarrays
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        while (array[i][sortBy] < pivot) {
            i++;
        }
        while (array[j][sortBy] > pivot) {
            j--;
        }
        if (i < j) {
            ;
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }
    // Recursively sort left and right subarrays
    const left = array.slice(0, i);
    const right = array.slice(i);
    return [...quicksort(left, sortBy), ...quicksort(right, sortBy)];
}
exports.quicksort = quicksort;
