class ListNode{
    constructor(val){
        this.value = val;
        this.next = null;
    }
    addNext(val){
        this.next = new ListNode(val);
        return this.next;
    }
}

const start = new ListNode(1);
start.addNext(2).addNext(3);
let current = start;
let last = null;
// Loop remembering the last item
while(current){
    if(current.value === 2){
        // When found reset and check if last item exists
        if(last) last.next = current.next;
        // If not, you are at the head
        else start = current.next;
    }
    last = current;
    current = current.next;
}