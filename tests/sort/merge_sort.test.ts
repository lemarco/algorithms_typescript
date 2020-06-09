import '../../src/algorithms/sort/merge_sort';
import { ascending_lambda, discending_lambda } from '../../src/algorithms/util/ascending_discending';
const array: Array<number> = [5, 2, 4, 6, 1, 3, 7, 8, 87, -2, -3, -4, 10, 0];

test('discending order test', () => {
    expect(array.merge_sort(array, discending_lambda)).toEqual([87, 10, 8, 7, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4]);
});

test('ascending order test', () => {
    expect(array.merge_sort(array, ascending_lambda)).toEqual([-4, -3, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 87]);
});
