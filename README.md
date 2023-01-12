This library provides a set of functions for working with arrays in TypeScript. The functions include:

- `sort`: returns a new array with the elements sorted any direction by any property
- `filter`: returns a new array with only the elements that match the predicate
- `transform`: returns a new array with the elements transformed by the transformer function
- `includes`: returns a boolean indicating whether the element is in the array
- `min`: returns the minimum element in the array, or `undefined` if the array is empty
- `max`: returns the maximum element in the array, or `undefined` if the array is empty
- `sum`: returns the sum of all elements in the array
- `average`: returns the average of all elements in the array, or 0 if the array is empty
- `distinct`: returns a new array with only distinct elements
- `shuffle`: returns a new array with the same elements, but in a shuffled order
- `flatten`: Flattens an array of nested arrays into a single array.
- `uniqueElements`: Returns an array with only the unique elements from the input array.
- `groupBy`: Groups the elements of an array based on the result of a callback function.
- `partition`: Divides an array into two arrays based on the result of a callback function.
- `intersection`: Returns an array with the elements that exist in both input arrays.
- `difference`: Returns an array with the elements that exist in the first input array but not the second.
- `removeDuplicates`: Removes duplicates from an array in place.
- `chunk`: Divides an array into smaller arrays of a given size.
- `randomSample`: Returns an array with a random sample of elements from the input array.
- `mean`: Returns the mean of an array of numbers.
- `median`: Returns the median of an array of numbers.
- `mode`: Returns the mode of an array of numbers.
- `variance`: Returns the variance of an array of numbers.
- `standardDeviation`: Returns the standard deviation of an array of numbers.
- `countOccurrences`: Returns the number of occurrences of a given element in an array.
- `zip`: Returns an array of arrays, where each array contains elements of the input arrays at corresponding indices.
- `unzip`: Returns an array of arrays, where each array contains elements of the input array of arrays at corresponding indices.
- `rotate`: Rotates the elements of an array by a given number of positions.
- `flip`: Reverses the order of elements in an array.
- `mirror`: Returns a new array which is the concatenation of the input array and its reversed version.
- `isSorted`: Returns whether an array or object is sorted based on a provided comparison function, direction, and key.
- `isEqual`: Returns whether two arrays are equal in terms of elements and order.
- `swap`: Swaps the position of two elements in an array.
- `move`: Moves an element from one position to another in an array.
- `fill`: Fills an array with a specified value.
- `reverseFill`: Fills an array in reverse order with a specified value.
- `findFirst`: Returns the first element that satisfies a provided callback function.
- `findLast`: Returns the last element that satisfies a provided callback function.
- `remove`: Removes elements from an array at a given index and count.
- `insert`: Inserts elements into an array at a given index.
- `merge`: Merges two arrays into one.
- `pad`: Pads an array with a specified value and repeat times.
  repeat: Returns an array with a repeated element.
- `range`: Returns an array with the minimum and maximum elements in an array of numbers.
- `countBy`: Groups the elements of an array and counts the number of elements in each group.
- `deepSearch`: Finds patterns, in strings, arrays, objects or nested combinations and returns the index of the match."

These functions can be useful for performing various operations on arrays in a concise and readable way.

# `sort`

The `sort` method returns a new array with the elements sorted any direction by any property.

```
import { sort } from 'ts-array-utilities';

const array = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

const sortedArray = sort(array, 'desc', 'age');

console.log(sortedArray); // [{ name: 'Charlie', age: 35 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]

```

# `filter`

The `filter` method returns a new array with only the elements that match the predicate.

```
import { filter } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const filteredArray = filter(array, n => n \> 2);

console.log(filteredArray); // [3, 4, 5]

const objectArray = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

const filteredObjectArray = filter(objectArray, person => person.age \> 30);

console.log(filteredObjectArray); // [{ name: 'Charlie', age: 35 }]

// Filter an array of objects by a property
const filteredObjectArrayByProperty = filter(objectArray, 'age', 30);

console.log(filteredObjectArrayByProperty); // [{ name: 'Alice', age: 30 }]

// Filter an array of objects by a property and a predicate
const filteredObjectArrayByPropertyAndPredicate = filter(objectArray, 'age', age => age \> 30);

console.log(filteredObjectArrayByPropertyAndPredicate); // [{ name: 'Charlie', age: 35 }]
```

# `transform`

The `transform` method returns a new array with the elements transformed by the transformer function.

```
import { transform } from 'ts-array-utilities';

const array = [1, 2, 3];
const transformedArray = transform(array, n => n \* 2);

console.log(transformedArray); // [2, 4, 6]
```

# `includes`

The `includes` function is a utility for searching for an element in an array. It can search for any type of value, including numbers, strings, objects, and arrays.
It can also search for elements in nested arrays.

```
import { includes } from 'ts-array-utilities';

const arr = [1, 2, [3, 4], [5, [6, 7]]];
console.log(includes(arr, 3)); // 3
console.log(includes(arr, 6)); // 6
console.log(includes(arr, 8)); // undefined
console.log(includes(['hello', 'world', 'foo', 'bar'], 'foo')); // 'foo'
console.log(includes(['hello', 'world', 'foo', 'bar'], 'baz')); // undefined

const nested = ['a', ['b', 'c', ['d', 'e']], 'f'];
console.log(includes(nested, 'a')); // 'a'
console.log(includes(nested, 'c')); // 'c'
console.log(includes(nested, 'e')); // 'e'
console.log(includes(nested, 'x')); // undefined
```

# `min`

The `min` function returns the minimum value in the array, accept an optional `key` parameter that allows you to specify a property to use for the min calculation.

```
import { min } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];

// Find the minimum value in the array
const minValue = min(array);
console.log(minValue); // 1

// Find the minimum value of the 'key' property in an array of objects
const objectArray = [{ key: 5 }, { key: 3 }, { key: 1 }, { key: 4 }, { key: 2 }];
const minObjectValue = min(objectArray, 'key');
console.log(minObjectValue); // { key: 1 }
```

# `max`

The `max` medthod returns the maximum value in the array, accept an optional `key` parameter that allows you to specify a property to use for the max calculation.

```
import { max } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];

// Find the maximum value in the array
const maxValue = max(array);
console.log(maxValue); // 5

// Find the maximum value of the 'key' property in an array of objects
const objectArray = [{ key: 5 }, { key: 3 }, { key: 1 }, { key: 4 }, { key: 2 }];
const maxObjectValue = max(objectArray, 'key');
console.log(maxObjectValue); // { key: 5 }
```

# `sum`

The `sum` method returns the sum of all elements in the array.

```
import { sum } from 'ts-array-utilities';

const array = [1, 2, 3];
const total = sum(array);

console.log(total); // 6
```

# `average`

The `average` method calculates the average of all the number values inside an array or object, and counts string values that contain numbers as well.

```
import { average } from './average';

const data = {
  a: 1,
  b: 2,
  c: '3',
  d: [4, 5, 6],
  e: {
    f: 7,
    g: 8,
  },
  h: '9',
};

console.log(average(data)); // Outputs 4.5
```

# `distinct`

The `distinct` method returns a new array with only distinct elements.

```
import { distinct } from 'ts-array-utilities';

const array: number[] = [1, 2, 2, 3, 3, 3];
const distinctArray: number[] = distinct(array);

console.log(distinctArray);  // [1, 2, 3]
```

# `shuffle`

The `shuffle` method returns a new array with the same elements, but in a shuffled order.

```
import { shuffle } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(array);
console.log(shuffledArray); // [3, 1, 5, 2, 4] (the order may be different)

const objectArray = [{ key: 1 }, { key: 2 }, { key: 3 }];
const shuffledObjectArray = shuffle(objectArray);
console.log(shuffledObjectArray); // [{ key: 2 }, { key: 3 }, { key: 1 }]

const stringArray = ['a', 'b', 'c', 'd', 'e'];
const shuffledStringArray = shuffle(stringArray);
console.log(shuffledStringArray); // ['c', 'e', 'a', 'b', 'd']

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const shuffledNestedArray = shuffle(nestedArray);
console.log(shuffledNestedArray); // [[5, 6], [1, 2], [3, 4]]

const nestedObjectArray = [{ key: [1, 2] }, { key: [3, 4] }, { key: [5, 6] }];
const shuffledNestedObjectArray = shuffle(nestedObjectArray);
console.log(shuffledNestedObjectArray); // [{ key: [5, 6] }, { key: [1, 2] }, { key: [3, 4] }]

const nestedStringArray = [['a', 'b'], ['c', 'd'], ['e', 'f']];
const shuffledNestedStringArray = shuffle(nestedStringArray);
console.log(shuffledNestedStringArray); // [['e', 'f'], ['a', 'b'], ['c', 'd']]

const nestedMixedArray = [[1, 2], ['a', 'b'], [{ key: 1 }, { key: 2 }]];
const shuffledNestedMixedArray = shuffle(nestedMixedArray);
console.log(shuffledNestedMixedArray); // [['a', 'b'], [{ key: 1 }, { key: 2 }], [1, 2]]
```

# `flatten`

The `flatten` method flattens an array of arbitrarily nested arrays of any type into a flat array.

```
import { flatten } from 'ts-array-utilities';

const nestedArray = [1, [2, [3, [4]]]];
const flatArray = flatten(nestedArray);
// flatArray: [1, 2, 3, 4]

const moreNestedArray = [1, 2, [3, [4, 5], 6, [[[7, 8]]]], 9];
const moreFlatArray = flatten(moreNestedArray);
// moreFlatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

# `uniqueElements`

The `uniqueElements` method returns an array with all the unique elements of the input array.

```
import { uniqueElements } from 'ts-array-utilities';

const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];
const uniqueArray = uniqueElements(array);
// [1, 2, 3, 4, 5]
```

# `groupBy`

The `groupBy` Groups the elements of the array by the result of calling callback on each element. Returns an object where the keys are the values returned by callback and the values are arrays containing the elements that returned that value.

```
import { groupBy } from 'ts-array-utilities';
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

// Group the elements of the array by their parity (even or odd)
const groupedArray = groupBy(array, (element) => element % 2 === 0);
// { 'true': [2, 4, 4, 4], 'false': [1, 3, 3, 5, 5] }
```

# `partition`

The `partition` method partitions the array into two arrays based on the result of calling callback on each element. The first array contains the elements for which callback returned true, and the second array contains the elements for which callback returned false.

```
import { partition } from 'ts-array-utilities';

const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

// Partition the array into even and odd numbers
const partitionedArray = partition(array, (element) => element % 2 === 0);
// [[2, 4, 4, 4], [1, 3, 3, 5, 5]]
```

# `intersection`

The `intersection` method returns an array containing the elements that are present in both array1 and array2.

```
import { intersection } from 'ts-array-utilities';

// Calculate the intersection of the array with itself
const intersectedArray = intersection(array, array);
// [1, 2, 3, 3, 4, 4, 4, 5, 5]
```

# `difference`

The `difference` method returns an array containing the elements that are present in array1 but not in array2.

```
import { difference } from 'ts-array-utilities';

// Calculate the difference between the array and itself
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const diffedArray = difference(array, array);
// []
```

# `removeDuplicates`

The `removeDuplicates` method removes duplicate elements from the array.
chunk(array, size): Splits the array into an array of smaller arrays, each with a maximum length of size.

```
import { removeDuplicates } from 'ts-array-utilities';

// Remove duplicates from the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

removeDuplicates(array);
// [1, 2, 3, 4, 5]
```

# `chunk`

The `chunk` method splits the array into an array of smaller arrays, each with a maximum length of size.

```
import { chunk } from 'ts-array-utilities';

// Split the array into chunks of size 2
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const chunkedArray = chunk(array, 2);
// [[1, 2], [3, 4], [5]]
```

# `randomSample`

The `randomSample` method returns an array of size random elements from the array.

```
import { randomSample } from 'ts-array-utilities';

// Select 3 random elements from the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const randomSample = randomSample(array, 3);
```

# `mean`

The `mean` method calculates the mean (average) of the numbers in the array.

```
import { mean } from 'ts-array-utilities';

// Calculate the mean of the elements in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const meanValue = mean(array);
// 3
```

# `median`

The `median` method calculates the median of the numbers in the array.

```
import { median } from 'ts-array-utilities';

// Calculate the median of the elements in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const medianValue = median(array);
// 3
```

# `mode`

The `mode` method calculates the mode (most common value) of the numbers in the array.

```
import { mode } from 'ts-array-utilities';

// Calculate the mode of the elements in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const modeValue = mode(array);
// 3 or 4 (either value is the most common in the array)
```

# `variance`

The `variance` method calculates the variance of the numbers in the array.

```
import { variance } from 'ts-array-utilities';

// Calculate the variance of the elements in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const varianceValue = variance(array);
// 2.5
```

# `standardDeviation`

The `standardDeviation` method calculates the standard deviation of the numbers in the array.

```
import { standardDeviation } from 'ts-array-utilities';

// Calculate the standard deviation of the elements in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const standardDeviationValue = standardDeviation(array);
// 1.5811388300841898
```

# `countOccurrences`

The `countOccurrences` method returns the number of occurrences of a given element in an array.

import { countOccurrences } from 'ts-array-utilities';

const array = [1, 2, 3, 2, 4, 2, 5];
const count = countOccurrences(array, 2);
console.log(count); // 3

# `zip`

The `zip` method returns an array of arrays, where each array contains elements of the input arrays at corresponding indices.

import { zip } from 'ts-array-utilities';

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false, true];
const zipped = zip(array1, array2, array3);
console.log(zipped); // [[1, 'a', true], [2, 'b', false], [3, 'c', true]]

# `unzip`

The `unzip` method returns an array of arrays, where each array contains elements of the input array of arrays at corresponding indices.

import { unzip } from 'ts-array-utilities';

const array = [[1, 'a', true], [2, 'b', false], [3, 'c', true]];
const unzipped = unzip(array);
console.log(unzipped); // [[1, 2, 3], ['a', 'b', 'c'], [true, false, true]]

# `rotate`

The `rotate` method rotates the elements of an array by a given number of positions.

import { rotate } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const rotated = rotate(array, 2);
console.log(rotated); // [4, 5, 1, 2, 3]

# `flip`

The `flip` method reverses the order of elements in an array.

import { flip } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const flipped = flip(array);
console.log(flipped); // [5, 4, 3, 2, 1]

# `mirror`

The `mirror` method returns a new array which is the concatenation of the input array and its reversed version.

```
import { mirror } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const mirrored = mirror(array);
console.log(mirrored); // [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
```

# `isSorted`

The `isSorted` function is a utility function that can be used to determine if an array or object's values are sorted in a specified order.

```
import { isSorted } from 'isSorted';

const numbers = [1, 2, 3, 4, 5];
console.log(isSorted(numbers, (a, b) => a - b)); //true

const names = ['John', 'Mike', 'Sara', 'Zack'];
console.log(isSorted(names, (a, b) => a.localeCompare(b), 'desc')); // false

const obj = {a: {x:1}, b: {x:2}, c: {x:3}};
console.log(isSorted(obj, (a, b) => a - b, 'asc', 'x')); // true
```

# `isEqual`

The `isEqual` method returns whether two arrays are equal interns of elements and order.

```
import { isEqual } from 'ts-array-utilities';

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const equal = isEqual(array1, array2);
console.log(equal); // true
```

# `swap`

The `swap` method swaps the position of two elements in an array.

```
import { swap } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
swap(array, 1, 3);
console.log(array); // [1, 4, 3, 2, 5]
```

# `move`

The `move` method moves an element from one position to another in an array.

```
import { move } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
move(array, 1, 3);
console.log(array); // [1, 3, 4, 2, 5]
```

# `fill`

The `fill` method fills an array with a specified value.

```
import { fill } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
fill(array, 0);
console.log(array); // [0, 0, 0, 0, 0]
```

# `reverseFill`

The `reverseFill` method fills an array in reverse order with a specified value.

```
import { reverseFill } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
reverseFill(array, 0);
console.log(array); // [0, 0, 0, 0, 0]
```

# `findFirst`

The `findFirst` method returns the first element that satisfies a provided callback function.

```
import { findFirst } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const firstEven = findFirst(array, (element) => element % 2 === 0);
console.log(firstEven); // 2
```

# `findLast`

The `findLast` method returns the last element that satisfies a provided callback function.

```
import { findLast } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const lastEven = findLast(array, (element) => element % 2 === 0);
console.log(lastEven); // 4
```

# `remove`

The `remove` method removes elements from an array at a given index and count.

```
import { remove } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
remove(array, 1, 2);
console.log(array); // [1, 4, 5]
```

# `insert`

The `insert` method inserts elements into an array at a given index.

```
import { insert } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
insert(array, 1, 6, 7);
console.log(array); // [1, 6, 7, 2, 3, 4, 5]
```

# `merge`

The `merge` method merges two arrays into one.

```
import { merge } from 'ts-array-utilities';

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const merged = merge(array1, array2);
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

# `pad`

The `pad` method pads an array with a specified value and repeat times.

```
import { pad } from 'ts-array-utilities';

const array = [1, 2, 3];
const padded = pad(array, 0, 2);
console.log(padded); // [0, 0, 1, 2, 3, 0, 0]
```

# `repeat`

The `repeat` method returns an array with a repeated element.

```
import { repeat } from 'ts-array-utilities';

const repeated = repeat(1, 5);
console.log(repeated); // [1, 1, 1, 1, 1]
```

# `range`

The `range` method calculates the minimum and maximum values in the array.

```
import { range } from 'ts-array-utilities';

// Calculate the minimum and maximum values in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const rangeValue = range(array);
// [1, 5]
```

# `countBy`

The `countBy` method counts the number of occurrences of each value in the array based on the result of calling callback on each element. Returns an object where the keys are the values returned by callback and the values are the number of occurrences of that value in the array.

```
import { countBy } from 'ts-array-utilities';
// Count the number of even and odd elements in the array
const array = [1, 2, 3, 3, 4, 4, 4, 5, 5];

const countByValue = countBy(array, (element) => element % 2 === 0);
// { 'true': 2, 'false': 3 }
```

# `deepSearch`

The `deepSearch` method finds patterns, including nested patterns, in an input, which can be an array, string, or object. It returns the index of the match if found, otherwise it returns undefined.

```
// strings:
const input = "Hello World";
const pattern = "World";
const matchIndex = deepSearch(input, pattern);
console.log(matchIndex) // 6

// objects:
const input = {name: 'John', age: 25, location: 'New York'};
const pattern = {name: 'John'};
const matchIndex = deepSearch(input, pattern);
console.log(matchIndex) // 0

// arrays:
const input = ["apple","banana","cherry","date","elderberry"];
const pattern = ["date","elderberry"];
const matchIndex = deepSearch(input, pattern);
console.log(matchIndex) // 3

// object with nested objects:
const input = {
    name: "John",
    age: 25,
    education: {
        degree: "BS",
        major: "Computer Science",
        university : "NYU"
    },
    location: "New York"
}
const pattern = {education: {degree: "BS", major: "Computer Science"}};
const matchIndex = deepSearch(input, pattern);
console.log(matchIndex) // 0
```
