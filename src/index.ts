import { insertion_sort } from './algorithms/sort/insertion_sort';
import { selection_sort } from './algorithms/sort/selection_sort';
import { merge_sort } from './algorithms/sort/merge_sort';

const marge_array: Array<number> = [5, 2, 4, 6, 1, 3, 7, 8, 87, -2, -3, -4, 10, 0];
const insertion_array: Array<number> = [5, 2, 4, 6, 1, 3, 0];
const selection_array: Array<number> = [5, 2, 4, 6, 1, 3, 0];
const ascending_lambda = (a: any, b: any) => a - b;
const discending_lambda = (a: any, b: any) => b - a;

console.dir(
    `insertion_sort([${insertion_array}], discending_lambda) => returns ${insertion_sort(
        insertion_array,
        discending_lambda,
    )}`,
);
console.dir(
    `selection_sort([${selection_array}], discending_lambda) => returns ${selection_sort(
        selection_array,
        discending_lambda,
    )}`,
);
console.dir(`merge_sort([${marge_array}], ascending_lambda) => returns ${merge_sort(marge_array, discending_lambda)}`);
