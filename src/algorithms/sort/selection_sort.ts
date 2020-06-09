import { ascending_lambda } from '../util/ascending_discending';
export {};
declare global {
    interface Array<T> {
        selection_sort(comparator: (a: T, b: T) => number): Array<T>;
        swap(aIndex: number, bIndex: number): void;
    }
}

Array.prototype.swap = function <T>(aIndex: number, bIndex: number) {
    const temp = this[aIndex];
    this[aIndex] = this[bIndex];
    this[bIndex] = temp;
};

Array.prototype.selection_sort = function <T>(comparator: (a: T, b: T) => number = ascending_lambda): Array<T> {
    for (let i = 0; i < this.length; i++) {
        let maxIndex = i;
        let changed = false;
        for (let j = i + 1; j < this.length; j++) {
            if (comparator(this[j], this[maxIndex]) <= 0) {
                maxIndex = j;
                changed = true;
            }
        }
        if (changed) {
            this.swap(i, maxIndex);
            changed = false;
        }
    }
    return this;
};
