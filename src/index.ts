import { insertion_sort } from './algorithms/sort/insertion_sort';
import { selection_sort } from './algorithms/sort/selection_sort';
import { merge_sort } from './algorithms/sort/merge_sort';
const arr: Array<number> = [5, 2, 4, 6, 1, 3, 7, 8, 87, -2, -3, -4, 10];

console.dir(arr);
merge_sort(arr, (a, b) => b - a);
console.dir(arr);
