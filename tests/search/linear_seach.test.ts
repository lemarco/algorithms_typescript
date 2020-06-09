import '../../src/algorithms/search/linear_seach';
const array: Array<number> = [5, 2, 4, 6, 1, 3, 0];

test('discending order test', () => {
    expect(array.linear_search(0)).toEqual(6);
});

test('discending order test', () => {
    expect(array.linear_search(7)).toEqual(null);
});
