import { LinkedList } from "./linkedlist"

export class Queue<T> {
    private list_ : LinkedList<T>;

    public constructor() {
        this.list_ = new LinkedList();
    }

    public front() : T {
        return this.list_.getHead();
    }

    public back() : T {
        return this.list_.getTail();
    }

    public enqueue(data : T) {
        this.list_.insertBack(data);
    }

    public dequeue() : T {
        return this.list_.popFront();
    }
}