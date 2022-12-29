This library provides a set of functions for working with arrays in TypeScript. The functions include:

- `sort`: returns a new array with the elements sorted in ascending order
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

The sort method returns a new array with the elements sorted in ascending order.

```
import { sort } from './array-utils';

const array = [3, 2, 1];
const sortedArray = sort(array);

console.log(sortedArray); // [1, 2, 3]
```

# `filter`

The filter method returns a new array with only the elements that match the predicate.

```
import { filter } from './array-utils';

const array = [1, 2, 3, 4, 5];
const evenNumbers = filter(array, n => n % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

# `transform`

The transform method returns a new array with the elements transformed by the transformer function.

```
import { transform } from './array-utils';

const array = [1, 2, 3];
const transformedArray = transform(array, n => n \* 2);

console.log(transformedArray); // [2, 4, 6]
```

# `includes`

The includes method returns a boolean indicating whether the element is in the array.

```
import { includes } from './array-utils';

const array = [1, 2, 3];
const includes2 = includes(array, 2);
const includes4 = includes(array, 4);

console.log(includes2); // true
console.log(includes4); // false
```

# `min`

The min method returns the minimum element in the array, or undefined if the array is empty.

import { min } from './array-utils';

const array = [1, 2, 3];
const minValue = min(array);

console.log(minValue); // 1

const emptyArray = [];
const minValueEmpty = min(emptyArray);

console.log(minValueEmpty); // undefined

# `max`

The max method returns the maximum element in the array, or undefined if the array is empty.

```
import { max } from './array-utils';

const array = [1, 2, 3];
const maxValue = max(array);

console.log(maxValue); // 3

const emptyArray = [];
const maxValueEmpty = max(emptyArray);

console.log(maxValueEmpty); // undefined
```

# `sum`

The sum method returns the sum of all elements in the array.

```
import { sum } from './array-utils';

const array = [1, 2, 3];
const total = sum(array);

console.log(total); // 6
```

# `average`

The average method returns the average of all elements in the array, or 0 if the array is empty.

```
import { average } from './array-utils';

const array = [1, 2, 3];
const avg = average(array);

console.log(avg); // 2
```

# `distinct`

The distinct method returns a new array with only distinct elements.

```
import { distinct } from './array-utils';

const array: number[] = [1, 2, 2, 3, 3, 3];
const distinctArray: number[] = distinct(array);

console.log(distinctArray);  // [1, 2, 3]
```

# `shuffle`

The shuffle method returns a new array with the same elements, but in a shuffled order.

```
import { shuffle } from './array-utils';

const array: number[] = [1, 2, 3];
const shuffledArray: number[] = shuffle(array);

console.log(shuffledArray);  // e.g. [2, 3, 1]
```
