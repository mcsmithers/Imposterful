class BinarySearchTreeNode extends BinaryTreeNode{
    constructor(val){
        super(val);
    }
    addRight(val){
        if(val < this.value) throw new Error("Invalid right");
        return super.addRight(val);
    }
    addLeft(val){
        if(val > this.value) throw new Error ("Invalid left");
        return super.addLeft(val);
    }
}
module.exports = BinarySearchTreeNode;

const buildTree = function(arr, start, end){
    // magic
}

const arr = [1,2,3,4,5,6,7,8,];
const tree = buildTree(arr, 0, arr.length - 1);

const addNodeToBST = function(val){
    // moar magic
}