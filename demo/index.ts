import {
  average,
  distinct,
  filter,
  includes,
  max,
  min,
  shuffle,
  sort,
  sum,
  transform
} from '../src/index';

const array: number[] = [3, 2, 1, 4, 2, 3, 1];
const emptyArray: number[] = [];

const sortedArray: number[] = sort(array);
console.log(sortedArray, 'sortedArray');  // [1, 2, 3]

const evenNumbers: number[] = filter(array, (n: number) => n % 2 === 0);
console.log(evenNumbers, 'evenNumbers');  // [2, 4]

const transformedArray: number[] = transform(array, (n: number) => n * 2);
console.log(transformedArray, 'transformedArray');  // [2, 4, 6]

const includes2: boolean = includes(array, 2);
const includes4: boolean = includes(array, 4);
console.log(includes2, 'includes2');  // true
console.log(includes4, 'includes4');  // false

const minValue: number | undefined = min(array);
console.log(minValue, 'minValue');  // 1

const minValueEmpty: number | undefined = min(emptyArray);
console.log(minValueEmpty, 'minValueEmpty');  // undefined

const maxValue: number | undefined = max(array);
console.log(maxValue, 'maxValue');  // 3

const maxValueEmpty: number | undefined = max(emptyArray);
console.log(maxValueEmpty, "maxValueEmpty");  // undefined

const total: number = sum(array);
console.log(total, 'sumTotal');  // 6

const avg: number = average(array);
console.log(avg, 'average');  // 2

const array2: number[] = [1, 2, 2, 3, 3, 3];
const distinctArray: number[] = distinct(array2);
console.log(distinctArray, 'distinctArray');  // [1, 2, 3]

const shuffledArray: number[] = shuffle(array);
console.log(shuffledArray, 'shuffledArray');  // e.g. [2, 3, 1]