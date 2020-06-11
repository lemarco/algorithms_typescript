import '../../src/algorithms/util/swap';
const array: Array<number> = [6, 5, 4, 3, 2, 1, 0];

test('swap test', () => {
    expect(array.swap(0, 1)).toEqual([5, 6, 4, 3, 2, 1, 0]);
});
