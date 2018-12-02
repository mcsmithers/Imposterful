// No keys, data is positional
// Enqueue and deqeue by hand and peeking
// Works from bottom up

const LinkedList = require("./linkedList.js");
class Queue{
    constructor(){
        this.count = 0;
        this.list = new LinkedList();
    }
    enqueue(val){
        this.count++;
        //add to bottom of queue
        this.list.append(val);
    }
    dequeue(){
        let out = this.peek();
        if(out){
            this.count--;
            this.list.remove(this.list.head);
        }
        return out;
    }
    peek(){
        return this.list.head ? this.list.head.value : null;
    }
}

module.exports = Queue;
const q = new Queue();
q.enqueue(1);
q.enqueue(1);
console.log(q.dequeue());
console.log(q.dequeue());

// Popular iunterview question is to make a queue from two stacks