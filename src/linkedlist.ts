interface IListNode<T> {
    prev: IListNode<T>;
    next: IListNode<T>;
    data: T;
}

export class LinkedList<T> {
    private head: IListNode<T>;
    private tail: IListNode<T>;

    public constructor() {
        this.head = null;
        this.tail = null;
    }

    public isEmpty(): boolean {
        return this.head === null;
    }

    public getHead(): T {
        if ( this.head === null ) {
            throw Error();
        }
        return this.head.data;
    }

    public getTail(): T {
        return this.tail.data;
    }

    public insertBack(data: T) {
        if ( this.head === null ) {
            this.head = {prev: null, data, next: null};
            this.tail = this.head;
            return;
        }
        this.tail.next = {prev: this.tail, data, next: null};
        this.tail = this.tail.next;
    }

    public insertFront(data: T) {
        if ( this.head === null ) {
            this.head = {prev: null, data, next: null};
            this.tail = this.head;
            return;
        }

        this.head.prev = {prev: null, data, next: this.head};
        this.head = this.head.prev;
    }

    public popFront(): T {
        if ( this.head === null ) {
            throw Error();
        }

        const retVal = this.head.data;
        if ( this.head === this.tail ) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        return retVal;
    }

    public popBack(): T {
        if ( this.tail === null ) {
            throw Error();
        }

        const retVal = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        return retVal;
    }
}
