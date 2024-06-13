// Node definition
class Node {
    constructor(data) {
        this.data = data; // Data of the node
        this.next = null; // Reference to the next node
    }
}

// LinkedList definition
class LinkedList {
    constructor() {
        this.head = null; // Start of the list
        this.size = 0; // Size of the list
    }

    // Add node to the beginning
    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Add node to the end
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert a node at a specific index
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Index out of bounds
        }
        
        if (index === 0) {
            this.prepend(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let previous;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        
        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    // Remove the first node
    removeFirst() {
        if (!this.head) {
            return null;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Remove the last node
    removeLast() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            let removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode;
        }

        let previous = null;
        let current = this.head;
        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
        return current;
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Index out of bounds
        }
        
        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        this.size--;
        return current.data;
    }

    // Update node data at a specific index
    updateAt(data, index) {
        if (index < 0 || index >= this.size) {
            return null; // Index out of bounds
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.data = data;
    }

    // Search for data in the list
    search(data) {
        let current = this.head;
        while (!current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Print the list
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.data + ' -> ';
            current = current.next;
        }
        console.log(str + 'null');
    }
}

// Example usage
let linkedList = new LinkedList();
linkedList.append(10); // 10 -> null
linkedList.append(20); // 10 -> 20 -> null
linkedList.prepend(30); // 30 -> 10 -> 20 -> null
linkedList.insertAt(15, 2); // 30 -> 10 -> 15 -> 20 -> null
linkedList.removeLast(); // Removes 20
linkedList.updateAt(25, 2); // 30 -> 10 -> 25 -> null

linkedList.printList(); // Outputs: 30 -> 10 -> 25 -> null
