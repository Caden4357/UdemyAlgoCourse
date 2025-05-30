class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
            console.log('NEXT: ', this.first.next);

        }
        this.size++;
    }
    pop(){
        if(this.first === null){
            return null;
        }
        let oldFirst = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return oldFirst.value;
    }
}

const stack = new Stack();
stack.push('Google.com');
stack.push('Youtube.com');
stack.push('instagram.com');
console.log(stack);
stack.pop();
console.log(stack);