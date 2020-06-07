export function insertion_sort<T>(array: Array<T>, comparator: (a: T, b: T) => number): void {
    for (let j = 1; j < array.length; j++) {
        const temp = array[j];
        let i = j - 1;

        while (i > -1 && comparator(array[i], temp) >= 0) {
            array[i + 1] = array[i];
            i--;
        }
        array[i + 1] = temp;
    }
}
