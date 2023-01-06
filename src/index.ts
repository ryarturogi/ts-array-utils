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
