const TreeNode = require("./tree");
class Heap extends TreeNode{
    constructor(val, type = "maximum"){
        super(val);
        this.isMaxHeap = type === "max";
    }
    addChild(val){
        const isValid = this.isMaxHeap ? val > this.value;
        if(isValid) return super.addChild(val);
        else throw new Error("Invalid Child ");
    }
}