export function linear_search<T>(array: Array<T>, value: T): number | null {
    for (let i = 0; i < array.length; i++) {
        if (Object.is(value, array[i])) return i;
    }
    return null;
}
