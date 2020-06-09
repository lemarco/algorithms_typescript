import { linear_search } from '../../src/algorithms/search/linear_seach';
const array: Array<number> = [5, 2, 4, 6, 1, 3, 0];

test('discending order test', () => {
    expect(linear_search(array, 0)).toEqual(6);
});

test('discending order test', () => {
    expect(linear_search(array, 7)).toEqual(null);
});
