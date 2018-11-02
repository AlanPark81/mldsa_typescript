import { LinkedList } from "../src/linkedlist";

describe("LinkedList", () => {
    it("insert_front & insert_back", () => {
        const list = new LinkedList<number>();
        expect(() => {list.getHead(); }).toThrow();
        for ( let i = 0 ; i < 100 ; i++ ) {
            if ( i % 2 === 0 ) {
                list.insertFront(i);
                expect(list.getHead()).toBe(i);
            } else {
                list.insertBack(i);
                expect(list.getTail()).toBe(i);
            }

            if ( i === 0 ) {
                expect(list.getHead()).toBe(list.getTail());
            } else {
                expect(list.getHead()).not.toBe(list.getTail());
            }
        }
    });

    it("pop_back & pop_front", () => {
        let list = new LinkedList<number>();
        expect(() => { list.getHead(); }).toThrow();
        for ( let i = 0 ; i < 3 ; i++ ) {
            if ( i % 2 === 0 ) {
                list.insertFront(i);
                expect(list.getHead()).toBe(i);
            } else {
                list.insertBack(i);
                expect(list.getTail()).toBe(i);
            }
            if ( i === 0 ) {
                expect(list.getHead()).toBe(list.getTail());
            } else {
                expect(list.getHead()).not.toBe(list.getTail());
            }
        }

        for ( let i = 0 ; i < 3 ; i++ ) {
            const modulo = list.popFront() % 2;
            if ( i < 2 ) {
                expect(modulo).toBe(0);
            } else {
                expect(modulo).toBe(1);
            }
        }

        list = new LinkedList();
        for ( let i = 0 ; i < 3 ; i++) {
            list.insertBack(i);
        }

        for ( let i = 0 ; i < 3 ; i++) {
            expect(list.popBack()).toBe(2 - i );
        }

        list = new LinkedList();
        for ( let i = 0 ; i < 3 ; i++) {
            list.insertBack(i);
        }

        for ( let i = 0 ; i < 3 ; i++) {
            expect(list.popFront()).toBe(i);
        }

        expect(() => {
            list.popBack();
        }).toThrow();

        expect(() => {
            list.getHead();
        }).toThrow();

        list = new LinkedList();
        for ( let i = 0 ; i < 3 ; i++) {
            list.insertBack(i);
        }

        for ( let i = 0 ; i < 3 ; i++) {
            expect(list.popFront()).toBe(i);
        }
        list = new LinkedList();
        for ( let i = 0 ; i < 3 ; i++) {
            list.insertFront(i);
        }

        for ( let i = 0 ; i < 3 ; i++) {
            expect(list.popFront()).toBe(2 - i );
        }
        expect(() => {
            list.popFront();
        }).toThrow();
        expect(() => {
            list.getTail();
        }).toThrow();
    });
});
