import { ascending_lambda } from '../util/ascending_discending';

export {};
declare global {
    interface Array<T> {
        insertion_sort(comparator: (a: T, b: T) => number): Array<T>;
    }
}

Array.prototype.insertion_sort = function <T>(comparator: (a: T, b: T) => number = ascending_lambda): Array<T> {
    for (let j = 1; j < this.length; j++) {
        const temp = this[j];
        let i = j - 1;

        while (i > -1 && comparator(this[i], temp) >= 0) {
            this[i + 1] = this[i];
            i--;
        }
        this[i + 1] = temp;
    }
    return this;
};
