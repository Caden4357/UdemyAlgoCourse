var CustomNode = /** @class */ (function () {
    function CustomNode(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return CustomNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (val) {
        var newNode = new CustomNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var runner = this.root;
        while (true) {
            if (newNode.value > runner.value) {
                if (!runner.right) {
                    runner.right = newNode;
                    return this;
                }
                runner = runner.right;
            }
            else if (newNode.value < runner.value) {
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
    };
    BST.prototype.find = function (value) {
        var runner = this.root;
        while (runner !== null) {
            if (value === runner.value) {
                return runner;
            }
            else if (value < runner.value) {
                runner = runner.left;
            }
            else {
                runner = runner.right;
            }
        }
        return null;
    };
    BST.prototype.contains = function (value) {
        return this.find(value) !== null;
    };
    return BST;
}());
var tree = new BST();
tree.insert(20);
tree.insert(18);
tree.insert(21);
console.log(tree.contains(18));
// console.log(tree.insert(18));
