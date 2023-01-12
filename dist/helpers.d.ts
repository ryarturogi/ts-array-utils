export declare function sortNumberArray(
  array: number[],
  direction: string
): number[]
export declare function sortStringArray(
  array: string[],
  direction: string
): string[]
export declare function sortObjectArray(
  array: object[],
  direction: string,
  sortBy: string
): object[]
export declare function deepEqual(a: any, b: any): boolean
export declare function isNumber(value: any): value is number
export declare function isObject(value: any): value is object
export declare function isArrayOfNumbers(arr: any[]): boolean
export declare function isArrayOfObjects(arr: any[]): boolean
export declare function isArrayOfStrings(arr: any[]): boolean
export declare function isArrayOfArrays(arr: any[]): boolean
export declare function removeArray(
  array: any[],
  index: number | ((x: number) => boolean),
  count?: number
): any[]
export declare function removeObject(
  object: Record<string, any>,
  index:
    | number
    | ((x: any, key: string, obj: Record<string, any>) => boolean)
    | string
): Record<string, any>
