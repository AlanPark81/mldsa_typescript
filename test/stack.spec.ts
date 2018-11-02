import { Stack } from "../src/stack";

describe("Stack", () => {
    it("enqueue & front & back", () => {
        const stack = new Stack();
        expect(() => {
            stack.pop();
        }).toThrow();
        expect(() => {
            stack.top();
        }).toThrow();

        for ( let i = 0 ; i < 3 ; i++) {
            expect(() => {
                stack.push(i);
            }).not.toThrow();
            expect(stack.top()).toBe(i);
        }
    });

    it("dequeue & front & back", () => {
        const stack = new Stack();
        expect(() => {stack.top(); }).toThrow();

        for ( let i = 0 ; i < 3 ; i++) {
            expect( () => {stack.push(i); } ).not.toThrow();
            expect(stack.top()).toBe(i);
        }

        while ( ! stack.isEmpty() ) {
            expect(stack.top()).toBe(stack.pop());
        }
    });
});
