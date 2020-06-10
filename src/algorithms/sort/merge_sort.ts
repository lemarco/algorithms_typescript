import './selection_sort';

export {};
declare global {
    interface Array<T> {
        merge_sort(array: Array<T>, comparator: (a: T, b: T) => number): Array<T>;
    }
}

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

Array.prototype.merge_sort = function <T>(array: Array<T>, comparator: (a: T, b: T) => number): Array<T> {
    if (array.length < 3) {
        return array.selection_sort(comparator);
    }

    const center = Math.floor(array.length / 2);
    return merge(
        array,
        array.merge_sort(array.slice(0, center), comparator),
        array.merge_sort(array.slice(center, array.length), comparator),
        comparator,
    );
};
