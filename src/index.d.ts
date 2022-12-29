export function sort(array: number[]): number[];

export function filter(array: number[], predicate: (n: number) => boolean): number[];

export function transform(array: number[], transformer: (n: number) => number): number[];

export function includes(array: number[], element: number): boolean;

export function min(array: number[]): number | undefined;

export function max(array: number[]): number | undefined;

export function sum(array: number[]): number;

export function average(array: number[]): number;

export function distinct(array: number[]): number[];

export function shuffle(array: number[]): number[];
