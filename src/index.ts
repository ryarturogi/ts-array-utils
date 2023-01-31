import {
  deepEqual,
  isArrayOfArrays,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfStrings,
  isNumber,
  isObject,
  removeArray,
  sortNumberArray,
  sortObjectArray,
  sortStringArray,
} from './helpers'
import { insertionSort, quicksort } from './sorting-algorithms'

const sort = (
  array: any[],
  direction: string = 'asc',
  sortBy: string = ''
): any[] => {
  let results: any[] = array
  const isNumberArray = typeof array[0] === 'number'
  const isStringArray = typeof array[0] === 'string'

  if (array.length > 1000) {
    results = quicksort(array, sortBy)
  } else {
    results = insertionSort(array, sortBy)
  }

  if (isNumberArray) {
    return sortNumberArray(results, direction)
  } else if (isStringArray) {
    return sortStringArray(results, direction)
  } else {
    return sortObjectArray(results, direction, sortBy)
  }
}

const filter = (array: any[], predicate: (item: any) => boolean): any[] => {
  const result: any[] = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (predicate(item)) {
      result.push(item)
    }
  }
  return result
}

const transform = (
  array: any[],
  transformer: (n: any) => any = (x) => x
): any[] => {
  return array.map((x) => {
    if (typeof x === 'number') {
      return transformer(x)
    } else {
      return x
    }
  })
}

const includes = (arr: any[], element: any): any | undefined => {
  for (const el of arr) {
    if (Array.isArray(el)) {
      const result = includes(el, element)
      if (result !== undefined) {
        return result
      }
    } else if (deepEqual(el, element)) {
      return el
    }
  }
  return undefined
}

const min = (array: any[], key?: string): any | undefined => {
  if (!array.length) return undefined

  if (key) {
    return array.reduce((acc, cur) => (cur[key] < acc[key] ? cur : acc))
  } else {
    return Math.min(...array)
  }
}

const max = (array: any[], key?: string): any | undefined => {
  if (!array.length) return undefined

  if (key) {
    return array.reduce((acc, cur) => (cur[key] > acc[key] ? cur : acc))
  } else {
    return Math.max(...array)
  }
}

const sum = (array: any[]): number => {
  return array.reduce((acc, cur) => {
    switch (true) {
      case typeof cur === 'number':
        return acc + cur
      case Array.isArray(cur):
        return acc + sum(cur)
      case typeof cur === 'object' && 'value' in cur:
        return acc + cur.value
      case typeof cur === 'string' && !isNaN(Number(cur)):
        return acc + Number(cur)
      default:
        return acc
    }
  }, 0)
}

const average = (obj: any): number => {
  let sum = 0
  let count = 0
  for (const value of Object.values(obj)) {
    if (isNumber(value)) {
      sum += value
      count++
    } else if (typeof value === 'string' && !isNaN(Number(value))) {
      sum += Number(value)
      count++
    } else if (isObject(value)) {
      const avg = average(value)
      sum += avg * Object.keys(value).length
      count += Object.keys(value).length
    }
  }
  return count ? sum / count : 0
}

const distinct = (array: any[]): any[] => {
  if (!Array.isArray(array)) return []

  if (array.every((x) => typeof x === 'object')) {
    return [...new Set(array.map((x) => JSON.stringify(x)))].map((x) =>
      JSON.parse(x)
    )
  }

  if (array.some((x) => Array.isArray(x))) {
    return [...new Set(array.flat())]
  }

  return [...new Set(array)]
}

const shuffle = (array: any[]): any[] => {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const flatten = (array: any[]): any[] => {
  return array.reduce(
    (flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next),
    []
  )
}

const uniqueElements = (array: any[]): any[] => {
  return Array.from(new Set(array))
}

const groupBy = (array: any[], callback: (element: any) => any): object => {
  return array.reduce((groups, element) => {
    const key = callback(element)
    groups[key] = groups[key] || []
    groups[key].push(element)
    return groups
  }, {})
}

const partition = (
  array: any[],
  callback: (element: any) => boolean
): any[][] => {
  return array.reduce(
    (partitions, element) => {
      partitions[callback(element) ? 0 : 1].push(element)
      return partitions
    },
    [[], []]
  )
}

const intersection = (array1: any[], array2: any[]): any[] => {
  return array1.filter((element) => array2.includes(element))
}

const difference = (array1: any[], array2: any[]): any[] => {
  return array1.filter((element) => !array2.includes(element))
}

const removeDuplicates = (array: any[]): void => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1)
        j--
      }
    }
  }
}

const chunk = (array: any[], size: number): any[][] => {
  const chunked: any[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size))
  }
  return chunked
}

const randomSample = (array: any[], size: number): any[] => {
  const sample: any[] = []
  for (let i = 0; i < size; i++) {
    const index = Math.floor(Math.random() * array.length)
    sample.push(array[index])
  }
  return sample
}

const mean = (array: number[]): number => {
  return array.reduce((sum, current) => sum + current, 0) / array.length
}

const median = (array: number[]): number => {
  array.sort((a, b) => a - b)
  const middle = Math.floor(array.length / 2)
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2
  } else {
    return array[middle]
  }
}

const mode = (array: number[]): number => {
  const frequency: { [key: number]: number } = {}
  let maxFrequency = 0
  let mode = array[0]
  for (const element of array) {
    frequency[element] = (frequency[element] || 0) + 1
    if (frequency[element] > maxFrequency) {
      maxFrequency = frequency[element]
      mode = element
    }
  }
  return mode
}

function variance(array: any[]): number {
  // check if array is empty
  if (array.length === 0) {
    return 0
  }

  // check if array has nested objects
  if (isArrayOfObjects(array)) {
    const key = arguments[1]
    const values = array.map((obj) => obj[key])
    return variance(values)
  }

  // check if array has strings
  if (isArrayOfStrings(array)) {
    return NaN
  }

  // check if array has numbers
  if (isArrayOfNumbers(array)) {
    const mean = array.reduce((a, b) => a + b) / array.length
    const squaredDifferences = array.map((num) => Math.pow(num - mean, 2))
    return squaredDifferences.reduce((a, b) => a + b) / array.length
  }

  // check if array has nested arrays
  if (isArrayOfArrays(array)) {
    const flattened = array.flat()
    return variance(flattened)
  }

  // calculate the mean
  const mean = array.reduce((a, b) => a + b) / array.length
  // calculate the squared differences
  const squaredDifferences = array.map((num) => Math.pow(num - mean, 2))
  // calculate the variance
  return squaredDifferences.reduce((a, b) => a + b) / array.length
}

const standardDeviation = (array: number[]): number => {
  return Math.sqrt(variance(array))
}

const countOccurrences = (array: any[], element: any): number => {
  return array.reduce(
    (count, current) => (current === element ? count + 1 : count),
    0
  )
}

const zip = (...arrays: any[][]): any[][] => {
  const maxLength = Math.max(...arrays.map((array) => array.length))
  return Array.from({ length: maxLength }).map((_, index) =>
    arrays.map((array) => array[index])
  )
}

const unzip = (array: any[][]): any[][] => {
  return array[0].map((_, index) => array.map((array) => array[index]))
}

const rotate = (array: any[], positions: number): any[] => {
  const rotated = array.slice()
  for (let i = 0; i < positions; i++) {
    rotated.unshift(rotated.pop())
  }
  return rotated
}

const flip = (array: any[]): any[] => {
  return array.reverse()
}

const mirror = (array: any[]): any[] => {
  return array.concat(array.slice().reverse())
}

const isSorted = (
  data: any,
  compareFn: (a: any, b: any) => number,
  direction?: 'asc' | 'desc',
  findByKey?: string
): boolean => {
  const values = Array.isArray(data)
    ? data
    : findByKey
    ? Object.values(data).map((val: any) => val[findByKey])
    : Object.values(data)

  let compare = compareFn
  if (direction) {
    compare = direction === 'asc' ? compareFn : (a, b) => -compareFn(a, b)
  }

  // add a check for undefined values before comparing
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === undefined || values[i + 1] === undefined) {
      return false
    }
    if (compare(values[i], values[i + 1]) > 0) {
      return false
    }
  }
  return true
}

const isEqual = (array1: any[], array2: any[]): boolean => {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => element === array2[index])
  )
}

const swap = (array: any[], index1: number, index2: number): void => {
  ;[array[index1], array[index2]] = [array[index2], array[index1]]
}

const move = (array: any[], from: number, to: number): void => {
  array.splice(to, 0, array.splice(from, 1)[0])
}

const fill = (array: any[], value: any): void => {
  for (let i = 0; i < array.length; i++) {
    array[i] = value
  }
}

const reverseFill = (array: any[], value: any): void => {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = value
  }
}

const findFirst = (
  array: any[],
  callback: (element: any) => boolean
): any | undefined => {
  for (const element of array) {
    if (callback(element)) {
      return element
    }
  }
  return undefined
}

const findLast = (
  array: any[],
  callback: (element: any) => boolean
): any | undefined => {
  return findFirst(array.slice().reverse(), callback)
}

const remove = (
  data: any[],
  index: number | ((x: number) => boolean),
  count?: number
): any[] => {
  if (Array.isArray(data)) {
    if (typeof index === 'function') {
      index = data.findIndex(index)
      count = 1
    }
    return removeArray(data, index, count) as any
  }
  return data
}

const insert = (array: any[], index: number, ...elements: any[]): void => {
  array.splice(index, 0, ...elements)
}

const merge = (array1: any[], array2: any[]): any[] => {
  return array1.concat(array2)
}

const pad = (array: any[], padding: any, repeat: number): any[] => {
  return [
    ...Array(repeat).fill(padding),
    ...array,
    ...Array(repeat).fill(padding),
  ]
}

const repeat = (array: any[], repeat: number): any[] => {
  let repeatedArray = Array.from({ length: repeat }, () => array)
  return repeatedArray.flat()
}

const range = (array: number[]): number[] => {
  array.sort((a, b) => a - b)
  return [array[0], array[array.length - 1]]
}

const countBy = (array: any[], callback: (element: any) => any): object => {
  return array.reduce((counts, element) => {
    const key = callback(element)
    counts[key] = (counts[key] || 0) + 1
    return counts
  }, {})
}

const deepSearch = (
  input: any,
  pattern: any,
  startIndex: number = 0
): number | undefined => {
  let idx = startIndex
  while (true) {
    const slice = input.slice(idx, idx + pattern.length)
    if (slice.length === 0) {
      return undefined
    }
    let found: any = true
    for (let i = 0; i < pattern.length; i++) {
      if (Array.isArray(pattern[i]) || typeof pattern[i] === 'object') {
        found = deepSearch(input, pattern[i], idx + i)
      } else if (slice[i] !== pattern[i]) {
        found = false
      }
      if (!found) {
        break
      }
    }
    if (found) {
      return idx
    }
    idx += 1
  }
}

export {
  sort,
  filter,
  transform,
  includes,
  min,
  max,
  sum,
  average,
  distinct,
  shuffle,
  flatten,
  uniqueElements,
  groupBy,
  partition,
  intersection,
  difference,
  removeDuplicates,
  chunk,
  randomSample,
  mean,
  median,
  mode,
  variance,
  standardDeviation,
  countOccurrences,
  zip,
  unzip,
  rotate,
  flip,
  mirror,
  isSorted,
  isEqual,
  swap,
  move,
  fill,
  reverseFill,
  findFirst,
  findLast,
  remove,
  insert,
  merge,
  pad,
  repeat,
  range,
  countBy,
  deepSearch,
}
