class CustomNode {
    value: number;
    right: CustomNode | null;
    left: CustomNode | null;
    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    root: CustomNode | null;

    constructor() {
        this.root = null;
    }
    insert(val: number) {
        const newNode = new CustomNode(val);
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
}

let tree = new BST();
tree.insert(20);
tree.insert(20);
tree.insert(21);
console.log(tree.insert(18));