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
const evenNumbers = filter(array, n => n % 2 === 0);

console.log(evenNumbers); // [2, 4]
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

<!-- export function shuffle(array: any[]): any[] {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
} -->

```
import { shuffle } from 'ts-array-utilities';

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(array);

console.log(shuffledArray); // [3, 1, 5, 2, 4]

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
