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

# `flattenArray`

The `flattenArray` method flattens an array of arbitrarily nested arrays of any type into a flat array.

```
import { flattenArray } from 'ts-array-utilities';

const nestedArray = [1, [2, [3, [4]]]];
const flatArray = flattenArray(nestedArray);
// flatArray: [1, 2, 3, 4]

const moreNestedArray = [1, 2, [3, [4, 5], 6, [[[7, 8]]]], 9];
const moreFlatArray = flattenArray(moreNestedArray);
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
