import { Heap } from "../src/heap";

describe("Heap", () => {
    it("empty error", () => {
        const heap = new Heap(5);
        expect(() => { heap.top(); }).toThrow();
        expect(() => { heap.remove(1); }).toThrow();
        expect(() => { heap.replaceTop(1); }).toThrow();
        expect(() => { heap.takeTop(); }).toThrow();
        expect(() => { heap.remove(1); }).toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
    });

    it("one item", () => {
        const heap = new Heap(1);
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).toThrow();
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(2); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("two item", () => {
        const heap = new Heap(2);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(3); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("three item", () => {
        const heap = new Heap(3);
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(4); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow(Error("Not found data 1"));
        expect(() => { heap.remove(13); }).toThrow(Error("Not found data 13"));
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(2); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(4); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(3);
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(2); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("four item", () => {
        const heap = new Heap(4);
        expect(() => { heap.insert(4); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(5); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow(Error("Not found data 1"));
        expect(() => { heap.remove(13); }).toThrow(Error("Not found data 13"));
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(2); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(4); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(3);
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(2); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("eight item", () => {
        const heap = new Heap(8);
        expect(() => { heap.insert(8); }).not.toThrow();
        expect(() => { heap.insert(7); }).not.toThrow();
        expect(() => { heap.insert(6); }).not.toThrow();
        expect(() => { heap.insert(5); }).not.toThrow();
        expect(() => { heap.insert(4); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(9); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow(Error("Not found data 1"));
        expect(() => { heap.remove(13); }).toThrow(Error("Not found data 13"));
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(2); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(4); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(3);
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(2); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("32 item", () => {
        let heap = new Heap(32);
        for ( let i = 1 ; i <= 32 ; i++) {
            expect(() => { heap.insert(33 - i ); }).not.toThrow();
        }

        heap = new Heap(32);
        for ( let i = 1 ; i <= 32 ; i++) {
            expect(() => { heap.insert(i); }).not.toThrow();
        }

        heap = new Heap(32);
        for ( let i = 0 ; i < 16 ; i++) {
            expect(() => { heap.insert(16 - i ); }).not.toThrow();
            expect(() => { heap.insert(17 + i ); }).not.toThrow();
        }

        heap = new Heap(32);
        for ( let i = 0 ; i < 16 ; i++) {
            expect(() => { heap.insert(32 - i ); }).not.toThrow();
            expect(() => { heap.insert(i + 1 ); }).not.toThrow();
        }

        expect(() => { heap.insert(33); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow(Error("Not found data 1"));
        expect(() => { heap.remove(33); }).toThrow(Error("Not found data 33"));
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(2); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(4); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(3);
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(2); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("64 item", () => {
        let heap = new Heap(64);
        for ( let i = 1 ; i <= 64 ; i++) {
            expect(() => { heap.insert(33 - i ); }).not.toThrow();
        }

        heap = new Heap(64);
        for ( let i = 1 ; i <= 64 ; i++) {
            expect(() => { heap.insert(i); }).not.toThrow();
        }

        heap = new Heap(64);
        for ( let i = 0 ; i < 32 ; i++) {
            expect(() => { heap.insert(32 - i ); }).not.toThrow();
            expect(() => { heap.insert(33 + i ); }).not.toThrow();
        }

        heap = new Heap(64);
        for ( let i = 0 ; i < 32 ; i++) {
            expect(() => { heap.insert(64 - i ); }).not.toThrow();
            expect(() => { heap.insert(i + 1 ); }).not.toThrow();
        }

        expect(() => { heap.insert(65); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow(Error("Not found data 1"));
        expect(() => { heap.remove(65); }).toThrow(Error("Not found data 65"));
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.insert(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(2); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.remove(1); }).not.toThrow();
        expect(() => { heap.remove(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.insert(1); }).not.toThrow();
        expect(() => { heap.insert(3); }).not.toThrow();
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(4); }).not.toThrow();
        expect( heap.top() ).toBe(2);
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(3);
        expect(() => { heap.replaceTop(1); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.replaceTop(2); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });
});
