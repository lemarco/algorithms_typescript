import '../util/swap';

export {};
declare global {
    interface Array<T> {
        bubble_sort(comparator: (a: T, b: T) => number): Array<T>;
    }
}

Array.prototype.bubble_sort = function <T>(comparator: (a: T, b: T) => number): Array<T> {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = this.length; j > i; j--) {
            if (comparator(this[j], this[j - 1]) < 0) {
                this.swap(j, j - 1);
            }
        }
    }
    return this;
};
