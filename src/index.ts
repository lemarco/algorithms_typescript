import { insertion_sort } from './algorithms/sort/insertion_sort';

const arr: Array<number> = [5, 2, 4, 6, 1, 3];

console.dir(arr);
insertion_sort(arr, (a, b) => b - a);
console.dir(arr);
