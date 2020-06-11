export {};
declare global {
    interface Array<T> {
        swap(aIndex: number, bIndex: number): Array<T>;
    }
}

Array.prototype.swap = function <T>(aIndex: number, bIndex: number): Array<T> {
    const temp = this[aIndex];
    this[aIndex] = this[bIndex];
    this[bIndex] = temp;
    return this;
};
