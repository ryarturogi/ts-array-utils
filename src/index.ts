import { insertionSort, quicksort } from './sorting-algorithms'

export const order = (array: any[], direction: string): any => {
  if (array.length <= 1) return array

  if (direction === 'asc') {
    // Sort the array in ascending order
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(order(left, 'asc'), order(right, 'asc'))
  } else if (direction === 'desc') {
    // Sort the array in descending order
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(order(right, 'desc'), order(left, 'desc'))
  } else {
    // Return the original array if the direction is not recognized
    return array
  }
}

const merge = (left: any[], right: any[]) => {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

export function sort(
  array: any[],
  direction: string = 'asc',
  sortBy: string = ''
): any[] {
  let results: any[] = []

  if (array.length > 1000) {
    results = quicksort(array, sortBy)
  } else {
    results = insertionSort(array, sortBy)
  }
  // Sort the array
  return order(results, direction)
}

export function filter(
  array: number[],
  predicate: (n: number) => boolean
): number[] {
  return array.filter(predicate)
}

export function transform(
  array: number[],
  transformer: (n: number) => number
): number[] {
  return array.map(transformer)
}

export function includes(array: number[], element: number): boolean {
  return array.indexOf(element) !== -1
}

export function min(array: number[]): number | undefined {
  return array.length ? Math.min(...array) : undefined
}

export function max(array: number[]): number | undefined {
  return array.length ? Math.max(...array) : undefined
}

export function sum(array: number[]): number {
  return array.reduce((acc, cur) => acc + cur, 0)
}

export function average(array: number[]): number {
  return array.length ? sum(array) / array.length : 0
}

export function distinct(array: number[]): number[] {
  return Array.from(new Set(array))
}

export function shuffle(array: number[]): number[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
