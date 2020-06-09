export {};
declare global {
    interface Array<T> {
        binary_search<T>(
            sorted_array: Array<T>,
            value: T,
            start_index: number,
            end_index: number,
            comparator: (a: T, b: T) => number,
        ): number | null;
    }
}

Array.prototype.binary_search = function <T>(
    sorted_array: Array<T>,
    value: T,
    start_index: number,
    end_index: number,
    comparator: (a: T, b: T) => number,
): number | null {
    const center = Math.floor((start_index + end_index) / 2);

    if (start_index > end_index) return null;
    if (Object.is(sorted_array[center], value)) return center;
    if (comparator(sorted_array[center], value) >= 0)
        return sorted_array.binary_search(sorted_array, value, start_index, center - 1, comparator);
    else return sorted_array.binary_search(sorted_array, value, center + 1, end_index, comparator);
};
