import './algorithms/sort/insertion_sort';
import './algorithms/sort/selection_sort';
import './algorithms/sort/merge_sort';
import './algorithms/util/swap';
import './algorithms/sort/bubble_sort';
const merge_array: Array<number> = [5, 2, 4, 6, 1, 3, 7, 8, 87, -2, -3, -4, 10, 0];
const insertion_array: Array<number> = [5, 2, 4, 6, 1, 3, 0];
const selection_array: Array<number> = [5, 2, 4, 6, 1, 3, 0];
const ascending_lambda = (a: any, b: any) => a - b;
const discending_lambda = (a: any, b: any) => b - a;

console.dir(insertion_array);
console.dir(insertion_array.bubble_sort(discending_lambda));
console.dir(insertion_array);

// console.dir(
//     `insertion_sort([${insertion_array}], discending_lambda) => returns ${insertion_sort(
//         insertion_array,
//         discending_lambda,
//     )}`,
// );
// console.dir(
//     `selection_sort([${selection_array}], discending_lambda) => returns ${selection_sort(
//         selection_array,
//         discending_lambda,
//     )}`,
// );
// console.dir(
//     `merge_sort([${merge_array}], ascending_lambda) => returns ${merge_array.merge_sort(
//         merge_array,
//         discending_lambda,
//     )}`,
// );
