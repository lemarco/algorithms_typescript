export function selection_sort<T>(array: Array<T>, comparator: (a: T, b: T) => number): Array<T> {
    function swap<T>(array: Array<T>, aIndex: number, bIndex: number) {
        const temp = array[aIndex];
        array[aIndex] = array[bIndex];
        array[bIndex] = temp;
    }

    for (let i = 0; i < array.length; i++) {
        let maxIndex = i;
        let changed = false;
        for (let j = i + 1; j < array.length; j++) {
            if (comparator(array[j], array[maxIndex]) >= 0) {
                maxIndex = j;
                changed = true;
            }
        }
        if (changed) {
            swap(array, i, maxIndex);
            changed = false;
        }
    }
    return array;
}
