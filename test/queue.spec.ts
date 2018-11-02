import { Queue } from "../src/queue";

describe("Queue", () => {
    it("enqueue & front & back", () => {
        const queue = new Queue();
        expect(() => {
            queue.front();
        }).toThrow();

        for ( let i = 0 ; i < 3 ; i++) {
            expect(() => {
                queue.enqueue(i);
            }).not.toThrow();
            expect(queue.back()).toBe(i);
            expect(queue.front()).toBe(0);
        }
    });

    it("dequeue & front & back", () => {
        const queue = new Queue();
        expect(() => {queue.front(); }).toThrow();

        for ( let i = 0 ; i < 3 ; i++) {
            expect( () => {queue.enqueue(i); } ).not.toThrow();
            expect(queue.back()).toBe(i);
            expect(queue.front()).toBe(0);
        }

        while ( ! queue.isEmpty() ) {
            expect(queue.back()).toBe(2);
            expect(queue.front()).toBe(queue.dequeue());
        }
    });
});
