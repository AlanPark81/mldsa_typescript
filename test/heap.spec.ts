import { Heap } from "../src/heap";

describe("Heap", () => {
    it("empty", () => {
        let heap = new Heap(1);
        expect(() => { heap = new Heap(0); } ).toThrow();
        expect(() => { heap.top(); }).toThrow();
        expect(() => { heap.remove(1); }).toThrow();
        expect(() => { heap.replaceTop(1); }).toThrow();
        expect(() => { heap.takeTop(); }).toThrow();
        expect(() => { heap.remove(1); }).toThrow();
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
        expect(() => { heap.replaceTop(3); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("three item", () => {
        let heap = new Heap(3, [1, 2, 3]);
        expect(() => { heap.insert(4); }).toThrow(Error("heap full"));
        expect( heap.top() ).toBe(1);
        expect( heap.takeTop() ).toBe(1);
        expect(() => { heap.remove(1); }).toThrow(Error("Not found data 1"));
        heap = new Heap(3, [1, 3, 2]);
        expect( heap.top() ).toBe(1);
        expect(() => { heap.remove(2); }).not.toThrow();
        expect( heap.top() ).toBe(1);
        expect(() => { heap.insert(2); }).not.toThrow();
        expect(() => { heap.replaceTop(4); }).not.toThrow();
        expect( heap.top() ).toBe(2);
    });

    it("sort", () => {
        let array = [];
        for ( let i = 0 ; i < 100 ; i++) {
            array.push(Math.floor(Math.random() * 100));
        }

        const heap = new Heap(100, array);

        array = heap.sort();

        for ( let i = 1 ; i < 100 ; i++) {
            expect(array[i] <= array[i - 1] ).toBeTruthy();
        }
    });
});
