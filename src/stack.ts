import { LinkedList } from "./linkedlist";

export class Stack<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList();
    }

    public push(data: T): void {
        this.list.insertBack(data);
    }

    public pop(): T {
        return this.list.popBack();
    }

    public top(): T {
        return this.list.getTail();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }
}
