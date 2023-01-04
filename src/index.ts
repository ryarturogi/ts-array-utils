import { insertionSort, quicksort } from './sorting-algorithms'

export const order = (array: any[], direction: string) => {
  // Sort in ascending order without reversing the array
  if (direction === 'asc') {
    return array
  }

  // Sort in descending order by reversing the array
  if (direction === 'desc') {
    // Use the native reverse method for small arrays
    if (array.length <= 100) {
      return array.reverse()
    } else {
      // Use a custom reverse function for large arrays
      const reversed = []
      for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i])
      }
      return reversed
    }
  }

  throw new Error(`Invalid direction: ${direction}`)
}

export function sort(
  array: any[],
  direction: string = 'asc',
  sortBy: string
): any[] {
  let results: any[] = []

  // Use the quicksort algorithm for large arrays
  if (array.length > 1000) {
    results = quicksort(array, sortBy)
  } else {
    results = insertionSort(array, sortBy)
  }

  // Use insertion sort for small arrays
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
