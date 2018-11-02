export class Heap<T> {
    private array: T[];

    constructor(size: number) {

    }

    public insert(data: T) {

    }

    public remove(data: T): boolean {
        return false;
    }

    public top(): T {
        return this.array[0];
    }

    public takeTop(): T {
        const retVal = this.array[0];

        return retVal;
    }

    public replaceTop(data: T) {

    }
}
