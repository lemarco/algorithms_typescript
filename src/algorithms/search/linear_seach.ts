export {};
declare global {
    interface Array<T> {
        linear_search<T>(value: T): number | null;
    }
}

Array.prototype.linear_search = function <T>(value: T): number | null {
    for (let i = 0; i < this.length; i++) {
        if (Object.is(value, this[i])) return i;
    }
    return null;
};
