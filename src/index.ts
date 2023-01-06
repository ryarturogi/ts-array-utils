import {
  deepEqual,
  isNumber,
  isObject,
  sortNumberArray,
  sortObjectArray,
  sortStringArray,
} from './helpers'
import { insertionSort, quicksort } from './sorting-algorithms'

export function sort(
  array: any[],
  direction: string = 'asc',
  sortBy: string = ''
): any[] {
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

export function filter(array: any[], predicate: (item: any) => boolean): any[] {
  const result: any[] = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (predicate(item)) {
      result.push(item)
    }
  }
  return result
}

export function transform(
  array: any[],
  transformer: (n: any) => any = (x) => x
): any[] {
  return array.map((x) => {
    if (typeof x === 'number') {
      return transformer(x)
    } else {
      return x
    }
  })
}

export function includes(arr: any[], element: any): any | undefined {
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

export function min(array: any[], key?: string): any | undefined {
  if (!array.length) return undefined

  if (key) {
    return array.reduce((acc, cur) => (cur[key] < acc[key] ? cur : acc))
  } else {
    return Math.min(...array)
  }
}

export function max(array: any[], key?: string): any | undefined {
  if (!array.length) return undefined

  if (key) {
    return array.reduce((acc, cur) => (cur[key] > acc[key] ? cur : acc))
  } else {
    return Math.max(...array)
  }
}

export function sum(array: any[]): number {
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

export function average(obj: any): number {
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

export function distinct(array: any[]): any[] {
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

export function shuffle(array: any[]): any[] {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function flattenArray(array: any[]): any[] {
  return array.reduce(
    (flat, next) =>
      flat.concat(Array.isArray(next) ? flattenArray(next) : next),
    []
  )
}

export function uniqueElements(array: any[]): any[] {
  return Array.from(new Set(array))
}

export function groupBy(array: any[], callback: (element: any) => any): object {
  return array.reduce((groups, element) => {
    const key = callback(element)
    groups[key] = groups[key] || []
    groups[key].push(element)
    return groups
  }, {})
}

export function partition(
  array: any[],
  callback: (element: any) => boolean
): any[][] {
  return array.reduce(
    (partitions, element) => {
      partitions[callback(element) ? 0 : 1].push(element)
      return partitions
    },
    [[], []]
  )
}

export function intersection(array1: any[], array2: any[]): any[] {
  return array1.filter((element) => array2.includes(element))
}

export function difference(array1: any[], array2: any[]): any[] {
  return array1.filter((element) => !array2.includes(element))
}

export function removeDuplicates(array: any[]): void {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1)
        j--
      }
    }
  }
}

export function chunk(array: any[], size: number): any[][] {
  const chunked: any[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size))
  }
  return chunked
}

export function randomSample(array: any[], size: number): any[] {
  const sample: any[] = []
  for (let i = 0; i < size; i++) {
    const index = Math.floor(Math.random() * array.length)
    sample.push(array[index])
  }
  return sample
}

export function mean(array: number[]): number {
  return array.reduce((sum, current) => sum + current, 0) / array.length
}

export function median(array: number[]): number {
  array.sort((a, b) => a - b)
  const middle = Math.floor(array.length / 2)
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2
  } else {
    return array[middle]
  }
}

export function mode(array: number[]): number {
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

export function variance(array: any[]): number {
  if (array.length === 0) {
    return 0
  }

  const flatArray = flattenArray(array)

  if (flatArray.every((element) => typeof element === 'number')) {
    const meanValue = mean(flatArray)
    const squaredDifferences = flatArray.map((x) => (x - meanValue) ** 2)
    return mean(squaredDifferences)
  } else {
    return NaN
  }
}

export function standardDeviation(array: number[]): number {
  return Math.sqrt(variance(array))
}

export function range(array: number[]): number[] {
  array.sort((a, b) => a - b)
  return [array[0], array[array.length - 1]]
}

export function countBy(array: any[], callback: (element: any) => any): object {
  return array.reduce((counts, element) => {
    const key = callback(element)
    counts[key] = (counts[key] || 0) + 1
    return counts
  }, {})
}

export function countOccurrences(array: any[], element: any): number {
  return array.reduce(
    (count, current) => (current === element ? count + 1 : count),
    0
  )
}

export function zip(...arrays: any[][]): any[][] {
  const maxLength = Math.max(...arrays.map((array) => array.length))
  return Array.from({ length: maxLength }).map((_, index) =>
    arrays.map((array) => array[index])
  )
}

export function unzip(array: any[][]): any[][] {
  return array[0].map((_, index) => array.map((array) => array[index]))
}

export function rotate(array: any[], positions: number): any[] {
  const rotated = array.slice()
  for (let i = 0; i < positions; i++) {
    rotated.unshift(rotated.pop())
  }
  return rotated
}

export function flip(array: any[]): any[] {
  return array.reverse()
}

export function mirror(array: any[]): any[] {
  return array.concat(array.slice().reverse())
}

export function isSorted(array: any[]): boolean {
  return array.every((element, index) =>
    index > 0 ? element >= array[index - 1] : true
  )
}

export function isEqual(array1: any[], array2: any[]): boolean {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => element === array2[index])
  )
}

export function swap(array: any[], index1: number, index2: number): void {
  ;[array[index1], array[index2]] = [array[index2], array[index1]]
}

export function move(array: any[], from: number, to: number): void {
  array.splice(to, 0, array.splice(from, 1)[0])
}

export function fill(array: any[], value: any): void {
  for (let i = 0; i < array.length; i++) {
    array[i] = value
  }
}

export function reverseFill(array: any[], value: any): void {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = value
  }
}

export function findFirst(
  array: any[],
  callback: (element: any) => boolean
): any | undefined {
  for (const element of array) {
    if (callback(element)) {
      return element
    }
  }
  return undefined
}

export function findLast(
  array: any[],
  callback: (element: any) => boolean
): any | undefined {
  return findFirst(array.slice().reverse(), callback)
}

export function remove(array: any[], index: number, count: number): void {
  array.splice(index, count)
}

export function insert(array: any[], index: number, ...elements: any[]): void {
  array.splice(index, 0, ...elements)
}

export function merge(array1: any[], array2: any[]): any[] {
  return array1.concat(array2)
}

export function pad(array: any[], padding: any, repeat: number): any[] {
  return [
    ...new Array(repeat).fill(padding),
    ...array,
    ...new Array(repeat).fill(padding),
  ]
}

export function repeat(element: any, repeat: number): any[] {
  return new Array(repeat).fill(element)
}
