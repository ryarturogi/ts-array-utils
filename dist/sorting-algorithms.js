"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = exports.insertionSort = void 0;
function insertionSort(array) {
    // Add a check to handle arrays with fewer than two elements
    if (array.length < 2) {
        return array;
    }
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        const temp = array[i];
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}
exports.insertionSort = insertionSort;
function quicksort(array) {
    // Add a check to handle arrays with fewer than two elements
    if (array.length < 2) {
        return array;
    }
    // Use median-of-three pivot selection to choose the pivot for improved performance
    const pivotIndex = getPivotIndex(array);
    const pivot = array[pivotIndex];
    array.splice(pivotIndex, 1);
    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
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
