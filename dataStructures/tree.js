class TreeNode{
    constructor(val){
        this.value = val;
        this.children = [];
    }

    addChild(val){
        const newNode = new TreeNode(val);
        this.children.push(newNode);
        return newNode;
    }
}
module.exports = TreeNode;