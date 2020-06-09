import '../../src/algorithms/search/binary_search';
import { ascending_lambda, discending_lambda } from '../../src/algorithms/util/ascending_discending';
const array: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('discending order test', () => {
    expect(array.binary_search(array, 3, 0, array.length - 1, ascending_lambda)).toEqual(3);
});
