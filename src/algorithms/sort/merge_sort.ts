import { selection_sort } from './selection_sort';

function merge<T>(to: Array<T>, left: Array<T>, right: Array<T>, comparator: (a: T, b: T) => number): Array<T> {
    let left_index = 0;
    let right_index = 0;

    for (let i = 0; i < to.length; i++) {
        if (left[left_index] !== undefined && right[right_index] !== undefined) {
            if (comparator(left[left_index], right[right_index]) <= 0) {
                to[i] = left[left_index];
                left_index++;
            } else {
                to[i] = right[right_index];
                right_index++;
            }
        } else if (left[left_index] !== undefined && right[right_index] === undefined) {
            to[i] = left[left_index];
            left_index++;
        } else {
            to[i] = right[right_index];
            right_index++;
        }
    }
    return to;
}

export function merge_sort<T>(array: Array<T>, comparator: (a: T, b: T) => number): Array<T> {
    if (array.length < 3) {
        return selection_sort(array, comparator);
    }
    const len = Math.floor(array.length / 2);
    return merge(
        array,
        merge_sort(array.slice(0, len), comparator),
        merge_sort(array.slice(len, array.length), comparator),
        comparator,
    );
}
