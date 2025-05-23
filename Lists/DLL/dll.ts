class CustomNode {
    val: number;
    next: CustomNode | null;
    prev: CustomNode | null;

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: CustomNode | null;
    tail: CustomNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val: number) {
        const newNode = new CustomNode(val);
        // check if the list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            // if not, the tail should point to the new node
            if (this.tail) this.tail.next = newNode;
            // the new node's previous should point to the tail
            newNode.prev = this.tail;
            // the tail should now be the new node
            this.tail = newNode;

            this.length++; // increment the length
        }
        // return the list
        return this;
    }
    pop() {
        // if htere is no head return undefined
        if (!this.head) return undefined;
        // store the current tail in a variable to return later
        const poppedNode = this.tail;
        // if the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the tail to be the previous Node
            if (poppedNode) this.tail = poppedNode.prev;
            // cut the old tail's previous to null
            if (poppedNode) poppedNode.prev = null;
            // set the new tail's next to null
            if (this.tail) this.tail.next = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        // if there is no head return undefined
        if (!this.head) return undefined;
        // store the current head in a variable to return later
        const oldHead = this.head;
        // if the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the head to be the next Node
            this.head = oldHead.next;
            // set the new head's previous to null
            if (this.head) this.head.prev = null;
            // cut the old head's next to null
            oldHead.next = null;
        }
        // decrement the length
        this.length--;
        // return the old head
        return oldHead;
    }
    unshift(val: number) {
        // create a new node with the value passed to the function
        const newNode = new CustomNode(val);
        // if the length is 0, set the head and tail to be the new node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // otherwise set the new node's next to the current head
            newNode.next = this.head;
            // set the current head's previous to the new node
            if (this.head) this.head.prev = newNode;
            // set the head to the new node
            this.head = newNode;
        }
        // increment the length
        this.length++;
        // return the list
        return this;
    }
    get(index: number): CustomNode | null {
        if (index < 0 || index >= this.length) return null;

        let current: CustomNode | null;
        let count: number;

        if (index <= this.length / 2) {
            current = this.head;
            count = 0;
            while (current !== null && count !== index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (current !== null && count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, value) {
        const newNode = new CustomNode(value);
        let node = this.get(index);
        if (node !== null) {
            node.val = value;
            return true;
        }
        return false;
    }
    insert(value, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        else {
            let newNode = new CustomNode(value);
            let beforeNode = this.get(index - 1);
            let afterNode = beforeNode.next;
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            newNode.next = afterNode;
            afterNode.prev = newNode;
            this.length++;
            return this;
        }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(`Current Node: ${current.val}`);
            current = current.next;
        }
    }
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length) return !!this.pop();

        let nodeToRemove = this.get(index);
        let priorNode = nodeToRemove.prev;
        priorNode.next = nodeToRemove.next;
        nodeToRemove.next.prev = priorNode;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        return true;
    }
}
const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
//   5
dll.push(3);

dll.push(4);

dll.remove(2);
console.log(dll.print());
// dll.insert(5,2)
// console.log(dll);
// console.log(dll.pop());
// dll.shift();
// dll.unshift(0);





// console.log(dll);