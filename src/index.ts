import { insertion_sort } from './algorithms/sort/insertion_sort';
import { selection_sort } from './algorithms/sort/selection_sort';
const arr: Array<number> = [5, 2, 4, 6, 1, 3];

console.dir(arr);
selection_sort(arr, (a, b) => a - b);
console.dir(arr);
