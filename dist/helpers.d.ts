declare function sortNumberArray(array: number[], direction: string): number[];
declare function sortStringArray(array: string[], direction: string): string[];
declare function sortObjectArray(array: object[], direction: string, sortBy: string): object[];
declare function deepEqual(a: any, b: any): boolean;
declare function isNumber(value: any): value is number;
declare function isObject(value: any): value is object;
declare function isArrayOfNumbers(arr: any[]): boolean;
declare function isArrayOfObjects(arr: any[]): boolean;
declare function isArrayOfStrings(arr: any[]): boolean;
declare function isArrayOfArrays(arr: any[]): boolean;
declare function removeArray(array: any[], index: number | ((x: number) => boolean), count?: number): any[];
declare function removeObject(object: Record<string, any>, index: number | ((x: any, key: string, obj: Record<string, any>) => boolean) | string): Record<string, any>;
export { sortNumberArray, sortStringArray, sortObjectArray, deepEqual, isNumber, isObject, isArrayOfNumbers, isArrayOfObjects, isArrayOfStrings, isArrayOfArrays, removeArray, removeObject, };
