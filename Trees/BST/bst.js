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
        if (!this.root) {
            return false;
        }
        var runner = this.root;
        while (true) {
            if (value === runner.value) {
                return true;
            }
            else if (value > runner.value) {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
            else if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            }
            else
                return false;
        }
    };
    return BST;
}());
var tree = new BST();
tree.insert(20);
tree.insert(18);
tree.insert(21);
console.log(tree.find(212));
// console.log(tree.insert(18));
