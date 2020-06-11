import '../../src/algorithms/sort/bubble_sort';
import { ascending_number_lambda, discending_number_lambda } from '../../src/algorithms/util/ascending_discending';
const array: Array<number> = [5, 2, 4, 6, 1, 3, 0];

test('discending order test', () => {
    expect(array.bubble_sort(discending_number_lambda)).toEqual([6, 5, 4, 3, 2, 1, 0]);
});

test('ascending order test', () => {
    expect(array.bubble_sort(ascending_number_lambda)).toEqual([0, 1, 2, 3, 4, 5, 6]);
});
