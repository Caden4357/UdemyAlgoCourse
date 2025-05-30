class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    dequeue(){
        if(this.first === null){
            return null;
        }
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}
let q = new Queue();
q.enqueue('first');
q.enqueue('2');
q.enqueue('3');
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

