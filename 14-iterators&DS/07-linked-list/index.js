class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._length = 0;
    }

    //Insert first Node
    insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
    }

    //Insert last Node
    insertLast(value) {
        const newNode = new Node(value);
        let current = this._head;

        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this._length++;
    }


    //Insert at index
    insertAt(value, index) {
        if (index > this._length)
            return;
        if (index === 0) {
            this.insertFirst(value);
            return;
        }
        const newNode = new Node(value);
        let current = this._head;
        let previous;

        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this._length++;
    }



    //Get at index
    getAt(index) {
        let current = this._head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.value)
            }
            count++;
            current = current.next;
        }
        return null;
    }
    //Remove at index
    removeAt(index) {
        if (index > this._length)
            return;
        let current = this._head;
        let previous;
        let count = 0;
        if (index == 0) {
            this._head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this._length--;
    }
    //print list data
    printListData() {
        let current = this._head;
        let list = '';

        while (current) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'end');
    }
    //clear list
    clearList() {
        this._head = null;
        this._length = 0;
    }
}

const list = new LinkedList();
list.insertFirst(100);
list.insertFirst(300);
list.insertFirst(400);
list.insertLast(200);
list.insertLast(50);
list.insertAt(900, 3)
list.getAt(2)
list.printListData();
list.removeAt(1);
list.printListData();
list.clearList();
list.printListData();
