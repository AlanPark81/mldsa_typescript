import { Heap } from "../src/heap";

describe("Heap", () => {
    it("insert", () => {
        const heap = new Heap(5);
        expect(() => {
            heap.top();
        }).toThrow();
    });

    // it("push & pop & top", () => {
    //     const stack = new Stack();
    //     expect(() => {stack.top(); }).toThrow();
    //
    //     for ( let i = 0 ; i < 3 ; i++) {
    //         expect( () => {stack.push(i); } ).not.toThrow();
    //         expect(stack.top()).toBe(i);
    //     }
    //
    //     while ( ! stack.isEmpty() ) {
    //         expect(stack.top()).toBe(stack.pop());
    //     }
    // });
});
