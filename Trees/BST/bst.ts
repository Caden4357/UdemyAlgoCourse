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
    find(value: number): CustomNode | null {
        let runner = this.root;

        while (runner !== null) {
            if (value === runner.value) {
                return runner;
            } else if (value < runner.value) {
                runner = runner.left;
            } else {
                runner = runner.right;
            }
        }
        return null;
    }
    contains(value: number): boolean {
        return this.find(value) !== null;
    }
    removeRoot(): boolean {
        // if bst is empty return false 
        if (!this.root) {
            return false;
        }
        if (this.root.left && !this.root.right) {
            this.root = this.root.left;
            return true;
        }
        if (!this.root.left && this.root.right) {
            this.root = this.root.right;
            return true;
        }
        if (!this.root.left && !this.root.right) {
            this.root = null;
            return true;
        }
        if (this.root.left && this.root.right) {
            let tempLeft = this.root.left;
            this.root = this.root.right;
            let current = this.root;
            while (current.left) {
                current = current.left;
            }
            current.left = tempLeft;
            return true;
        }
        return false;

    }
}

let tree = new BST();
tree.insert(20);
tree.insert(18);
tree.insert(21);
console.log(tree.contains(18));
// console.log(tree.insert(18));