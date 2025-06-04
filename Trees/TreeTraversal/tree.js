class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while (true) {
            if (newNode.value > runner.value) {
                if (!runner.right) {
                    runner.right = newNode;
                    return this;
                }
                runner = runner.right;
            } else if (newNode.value < runner.value) {
                if (!runner.left) {
                    runner.left = newNode;
                    return this;
                }
                runner = runner.left;
            }
            else {
                return this; // ignoring duplicates
            }
        }
    }
    bfs() {
        if (!this.root) {
            return null;
        }
        let queue = [];
        let visited = [];
        queue.unshift(this.root);
        while (queue.length > 0) {
            let temp = queue[0];
            visited.push(queue[0].value);
            queue.shift();
            if (temp.left) {
                queue.push(temp.left);
            } if (temp.right) {
                queue.push(temp.right);
            }
        }
        return visited;
    }
    bfsrefactored() {
        if (!this.root) return [];

        let queue = [this.root];
        let visited = [];

        while (queue.length > 0) {
            const current = queue.shift();
            visited.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return visited;
    }
    DFSPreOrder() {
        if(!this.root) return null;
        const nodesInTree = [];
        const current = this.root;
        const traverse = (node) => {
            nodesInTree.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return nodesInTree;
    }
}
let bst = new Tree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);





console.log(bst.DFSPreOrder());
