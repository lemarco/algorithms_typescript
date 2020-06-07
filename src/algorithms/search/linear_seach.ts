function linear_search<T>(array: Array<T>, value: T): number | null {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return null;
}
