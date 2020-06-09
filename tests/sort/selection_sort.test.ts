import { selection_sort } from '../../src/algorithms/sort/selection_sort';
import { ascending_lambda, discending_lambda } from './sorting_lamdas';
const array: Array<number> = [5, 2, 4, 6, 1, 3, 0];

test('discending order test', () => {
    expect(selection_sort(array, discending_lambda)).toEqual([6, 5, 4, 3, 2, 1, 0]);
});

test('ascending order test', () => {
    expect(selection_sort(array, ascending_lambda)).toEqual([0, 1, 2, 3, 4, 5, 6]);
});
