// Jus tlike a singly-linked list, but it points to previous too

// Values stoes in non-contiguous memory to grow and change as needed
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    transverse(fn) {
        // Start at the head and moves until the end of the list
        let current = this.head;
        let last = null;
        while (current) {
            const result = fn(current, last);
            last = current;
            current = current.next;
            if (result) break;
        }
        return last;
    }
    // Insert ele in middle of list
    // 1 -> <- 2 -><- 4 -><- 3 
    insertAt(node, val) {
        const newNode = {
            value: val,
            next: node.next,
            previous: node
        }
        if(node.next) node.next.previous = newNode;
        node.next = newNode;
        // Set passed in node's next to new node
        return newNode;
    }
    // Drop ele onto list's end
    append(val) {
        const newNode = {
            value: val,
            next: null,
            previous: null
        }
        // If head is null, set it
        if (this.head) {
            this.head = newNode;
        } else {
            // Use the traverse to go to the end
            const lastNode = this.traverse(n => false);
            // Set next on last node
            lastNode.next = newNode;
            // Reset next and previous
            newNode.previous = lastNode;
        }
        return newNode;

    }
    // Remove ele anywhere in list
        // 1 <-> 2 <-> 3 <-> 4 
    remove(node) {
        if (this.head.value === node.value) {
            this.head = this.head.next;
            // Reset node's previos
        } else {
            if(node.previous){
                node.previous.next = node.next;
            }
            // Reset node's next
            if(node.next){
                node.next.previous = node.previous;
            }
        }
    }
}

module.exports = DoublyLinkedList;
const list = new DoublyLinkedList();
const print = () => list.traverse(n => console.log(n.value));
list.append(1);
const two = list.append(2);
list.append(3);
print();
console.log('Inserting 5...');
list.insertAt(two, 5);
print();
console.log('Removing 2...');
list.remove(two);
print();