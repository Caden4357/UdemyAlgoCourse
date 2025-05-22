class Node {
    constructor(data, nextNode = null){
        this.data=data;
        this.next=nextNode;
    }
}
class SinglyLinkedList {
    constructor(startingNode = null) {
        this.head = startingNode;
        this.tail = startingNode;
        this.length = startingNode ? 1 : 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        // If the list is empty
        if(!this.head){
            return undefined;
        }
        else if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        else{
            let runner = this.head;
            while(runner.next.next){
                runner = runner.next;
            }
            runner.next = null;
            this.tail = runner;
            this.length--;
            return this;
        }
    }
    shift(){
        // if list is empty return undefined
        if(!this.head){
            return undefined;
        }
        // Take current head save it to var to return it change the head to be the head.next
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    // unshift
    unshift(val){
        // create a node using the val passed in 
        let newNode = new Node(val);
        // if there is no head set head and tail to newNode
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            // otherwise set the newly created nodes next property to be the current head 
            newNode.next = this.head;
            // set the head to newNode
            this.head = newNode;
            // increment length 
            this.length++;
            return this;
        }
    }
    get(index){
        if(index < 0 || index > this.length) return null;
        let i = 0;
        let current = this.head;
        while(i !== index){
            current = current.next;
            i++;
        }
        return current;
    }
    set(index, val){
        let nodeToChange = this.get(index);
        if(!nodeToChange){
            return false;
        }
        nodeToChange.data = val;
        return true;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        else{
            let newNode = new Node(val);
            let prev = this.get(index-1);
            let oldNode = prev.next;
            prev.next = newNode;
            newNode.next = oldNode;
            this.length++;
            return true;
        }
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length-1) return !!this.pop();
        if(index === this.length-1) return !!this.shift();
        let node1 = this.get(index-1);
        let nodeToBeRemoved = node1.next;
        node1.next = nodeToBeRemoved.next;
        this.length--;
        return nodeToBeRemoved;
    }   
    display(){
        let runner = this.head;
        while(runner){
            console.log('RUNNER: ', runner.data, 'NEXT: ', runner.next);
            runner = runner.next;
        }
        console.log(`The length is: ${this.length}`);
    }

    // reverse list 
    // 13 - 27 - 32 - 71 
    // swap head and tail 
    // create a var called next and prev 
    // initialize a node to start at the head 
    // loop through the list 
    // save the next to be the next on whatever node is 
    // set the next prop on the node to be whatever prev is 
    // set prev to be the value of the node variable 
    // set node var the be the value of next var
    // 13 - 27 - 32 - 71 
    //           27 - 13
    // T
    // reverse(){
    //     const oldHead = this.head;
    //     const oldTail = this.tail;
    //     this.head = this.tail;
    //     this.tail = oldHead;
    //     let current = this.tail;
    //     while(current){
    //         // current is 13
    //         const nextNode = current.next; // 27 
    //         const nextNodesNext= current.next.next; // 32
    //         const oldCurrent = current;
    //         nextNode.next = oldCurrent;
    //         current = nextNodesNext;
    //     }
    //     return this;
    // }
    reverse2(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
let sll = new SinglyLinkedList();
console.log(sll);
sll.push(13);
sll.push(27);
sll.push(32);
sll.push(71);
// // console.log(sll.pop());
// // console.log(sll.shift());
// // console.log(sll.shift());
// // console.log(sll.unshift(0));
// // sll.set(2, 24)
// // console.log(sll.get(2));
// console.log(sll.insert(2, 34));
// // console.log(sll.get(3));
// console.log(sll.remove(2));
console.log(sll.reverse2());
console.log(sll.display());


