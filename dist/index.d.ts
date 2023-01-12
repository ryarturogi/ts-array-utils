export declare function sort(
  array: any[],
  direction?: string,
  sortBy?: string
): any[]
export declare function filter(
  array: any[],
  predicate: (item: any) => boolean
): any[]
export declare function transform(
  array: any[],
  transformer?: (n: any) => any
): any[]
export declare function includes(arr: any[], element: any): any | undefined
export declare function min(array: any[], key?: string): any | undefined
export declare function max(array: any[], key?: string): any | undefined
export declare function sum(array: any[]): number
export declare function average(obj: any): number
export declare function distinct(array: any[]): any[]
export declare function shuffle(array: any[]): any[]
export declare function flatten(array: any[]): any[]
export declare function uniqueElements(array: any[]): any[]
export declare function groupBy(
  array: any[],
  callback: (element: any) => any
): object
export declare function partition(
  array: any[],
  callback: (element: any) => boolean
): any[][]
export declare function intersection(array1: any[], array2: any[]): any[]
export declare function difference(array1: any[], array2: any[]): any[]
export declare function removeDuplicates(array: any[]): void
export declare function chunk(array: any[], size: number): any[][]
export declare function randomSample(array: any[], size: number): any[]
export declare function mean(array: number[]): number
export declare function median(array: number[]): number
export declare function mode(array: number[]): number
export declare function variance(array: any[]): number
export declare function standardDeviation(array: number[]): number
export declare function countOccurrences(array: any[], element: any): number
export declare function zip(...arrays: any[][]): any[][]
export declare function unzip(array: any[][]): any[][]
export declare function rotate(array: any[], positions: number): any[]
export declare function flip(array: any[]): any[]
export declare function mirror(array: any[]): any[]
export declare function isSorted(
  data: any,
  compareFn: (a: any, b: any) => number,
  direction?: 'asc' | 'desc',
  findByKey?: string
): boolean
export declare function isEqual(array1: any[], array2: any[]): boolean
export declare function swap(array: any[], index1: number, index2: number): void
export declare function move(array: any[], from: number, to: number): void
export declare function fill(array: any[], value: any): void
export declare function reverseFill(array: any[], value: any): void
export declare function findFirst(
  array: any[],
  callback: (element: any) => boolean
): any | undefined
export declare function findLast(
  array: any[],
  callback: (element: any) => boolean
): any | undefined
export declare function remove(
  data: any[],
  index: number | ((x: number) => boolean),
  count?: number
): any[]
export declare function insert(
  array: any[],
  index: number,
  ...elements: any[]
): void
export declare function merge(array1: any[], array2: any[]): any[]
export declare function pad(array: any[], padding: any, repeat: number): any[]
export declare function repeat(array: any[], repeat: number): any[]
export declare function range(array: number[]): number[]
export declare function countBy(
  array: any[],
  callback: (element: any) => any
): object
export declare function deepSearch(
  input: any,
  pattern: any,
  startIndex?: number
): number | undefined
