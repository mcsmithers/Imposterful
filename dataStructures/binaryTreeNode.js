class BinaryTreeNode{
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
    addRight(val){
        const newNode = new BinaryTreeNode(val);
        this.right = newNode;
        return newNode;
    }
    addLeft(val){
        const newNode = new BinaryTreeNode(val);
        this.left = newNode;
        return newNode;
    }
}

module.exports = BinaryTreeNode;
const root = new BinaryTreeNode(1);
const r1 = root.addRight(2);
const l1 = root.addLeft(3);
r1.addRight(4).addRight(5);
l1.addLeft(7);
console.log(root);

/// Popular interview question- see if the tree is symmmetrial or balanced?
l1.addLeft(3);
l1.addRight(4);
r1.addLeft(5);
r1.addRight(6);