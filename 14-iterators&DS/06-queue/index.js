class Queue {
    constructor() {
        this._items = [];
        this._count = 0;
        this._front = 0;
    }

    enqueue(item) {
        this._items[this._count] = item;
        this._count++;
    }
    isEmpty() {
        return this._count === 0
    }
    dequeue() {
        if (this.isEmpty())
            return undefined;

        const item = this._items[this._front];

        for (let i = this._front; i < this._items.length; i++) {
            this._items[i] = this._items[i + 1];
        }
        this._count--;
        this._items.length = this._count;
        return item;
    }

    peek() {
        if (this.isEmpty())
            return undefined;

        return this._items[this._front];
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue)
queue.dequeue();
console.log(queue)
console.log(queue.peek())