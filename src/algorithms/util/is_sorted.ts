export {};
declare global {
    interface Array<T> {
        is_sorted<T>(comparator: (a: T, b: T) => number): boolean;
    }
}

Array.prototype.is_sorted = function <T>(comparator: (a: T, b: T) => number): boolean {
    for (let i = 1; i < this.length; i++) {
        if (comparator(this[i - 1], this[i]) <= 0) return false;
    }
    return true;
};
