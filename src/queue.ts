import { LinkedList } from "./linkedlist";

export class Queue<T> {
    private list: LinkedList<T>;

    public constructor() {
        this.list = new LinkedList();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public front(): T {
        return this.list.getHead();
    }

    public back(): T {
        return this.list.getTail();
    }

    public enqueue(data: T) {
        this.list.insertBack(data);
    }

    public dequeue(): T {
        return this.list.popFront();
    }
}
