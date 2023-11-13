class Stack {
    constructor() {
        this._items = [];
        this._count = 0;
    }

    push(item) {
        this._items[this._count] = item;
        this._count++;
    }

    pop() {
        if (this._count === 0) {
            return 'stack underflow'
        }

        const item = this._items[this._count - 1];
        this._count--;

        for (let i = this._count; i < this._items.length; i++) {
            this._items[i] = this._items[i + 1];
        }

        this._items.length = this._count;
        return item;

    }

    peek() {
        if (this._count === 0) {
            return 'stack underflow'
        }

        return this._items[this._count - 1];
    }

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack)
stack.pop();
console.log(stack)
console.log(stack.peek())
stack.pop();
console.log(stack.peek())
