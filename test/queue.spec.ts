import { Queue } from "../src/queue"

describe("Queue", () => {
    it("insert_front & insert_back", () => {
        let queue = new Queue();
        expect(()=>{queue.front()}).toThrow();
    });

    it("pop_back & pop_front", () => {

    })
});
