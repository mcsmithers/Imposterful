// // Note: linked lists work a lot like a CRUD application

class LinkedList {
    constructor() {
        this.head = null;
    }
    /// Iterator
    traverse(fn) {
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

    // // Insert element in middle of list
    insertAt(node, val) {
        const newNode = {
            value: val,
            next: node.next
        }
        node.next = newNode;
        return newNode;
    }

    // // Drop element onto end of list
    append(val) {
        const newNode = {
            value: val,
            next: null
        }
        // If head is null, set it
        if (this.head) {
            this.head = newNode;
        } else {
            // Use the traverse to go to the end
            const lastNode = this.traverse(n => false);
            // Set next on last node
            lastNode.next = newNode;
        }
        return newNode;
    }

    // // Remove element anywhere in list - This is a very popular question
    remove(node) {
        // Check if this particular node is the head
        if(this.head.value === node.value){
            this.head = this.head.nezt;
        }else{
            // Traverse until you find the node
            this.traverse((n, last) => {
                if(n.value === node.value){
                    // Use the last node to reset next
                    last.next = n.next;
                }
            });
        }
    }
}

const list = new LinkedList();
const printer = () => list.traverse(n => console.log(n.value));
list.append(1);
const two = list.append(2);
list.append(3);
print();
console.log('Inserting 5... ');
list.insertAt(two, 5);
print();
console.log('Removing 2...');
list.remove(two);
print();