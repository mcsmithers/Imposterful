// This is working like typical built-in JS stack funtions, but by hand to demo how it all works

// Open at top, close at bottom
// You can see what's on top or at the end or what's after the top without affecting the rest
// Can't acces the middle
const LinkedList = require("./linkedList.js");
class Stack{
    constructor(){
        this.list = new LinkedList();
        this.count = 0;
    }
    push(val){
        this.count++;
        const newNode = {
            value: val,
            next: this.list.head
        }
        this.list.head = newNode;
    }
    pop(){
        this.count--;
        const val = this.peek();
        if(val){
            this.list.remove(this.list.head);
        }
        return val;
    }
    peek(){
        return this.list.head ? this.list.head.value : null;
    }
}
module.exports = Stack;
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());