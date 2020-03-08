// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        ;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // Create a new node
        var newNode = {
            value: value,
            next: null,
            prev: null
        };
        // Let the newNode.prev point to tail
        newNode.prev = this.tail;
        // Let tail.next point to the new node
        this.tail.next = newNode;
        // Move the tail pointer
        this.tail = newNode;
        // Increment the length
        this.length++;

    }

    prepend(value) {
        // Create a new node
        var newNode = {
            value: value,
            next: null
        };
        // Let the newNode.next point to the first node
        newNode.next = this.head;
        // Let the head.prev point to the newNode
        this.head.prev = newNode;
        // Move the head pointer
        this.head = newNode;
        // Increment the length
        this.length++;

    }

    insert(index, value) {
        // If the index < 0 or index > length
        if (index < 0 || index > this.length) {
            console.log("Index out of range");
            return;

        }
        // If the index is 0 call prepend
        if (index === 0) {
            this.prepend(value);
            return;

        }
        // If the index is the length
        if (index === this.length) {
            this.append(value);
            return;

        }
        // If the index is in the middle
        // Create a newNode
        var newNode = {
            value: value,
            next: null,
            prev: null
        };
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // Traverse to index - 1
        for (let i = 0; i < index - 1; i++) {
            tmpPointer = tmpPointer.next;

        }
        // Declare the prevNode
        var prevNode = tmpPointer;
        // Declare the currentNode
        var currentNode = tmpPointer.next;
        // Let the prevNode.next point to the newNode
        prevNode.next = newNode;
        // Let the newNode.prev point to the prevNode
        newNode.prev = prevNode;
        // Let the newNode.next point to the currentNode
        newNode.next = currentNode;
        // Let the currentNode.prev point to the newNode
        currentNode.prev = newNode;
        // Increment the length
        this.length++;

    }

    removeFirst() {
        // If the length is 0
        if (this.length === 0) {
            console.log("The singly linked list is empty.");
            return;

        }
        // If the length is 1
        if (this.length === 1) {
            // Let the head point to null
            this.head = null;
            // Let the tail point to null
            this.tail = null;
            // Decrement the length
            this.length--;
            return;

        }
        // If the length is more than 1
        // Copy the had pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // Move the head pointer
        this.head = this.head.next;
        // Let the head.prev point to null
        this.head.prev = null;
        // Decrement the length
        this.length--;
        // Return the removed data
        return tmpPointer.value;

    }

    removeLast() {
        // If the length is 0
        if (this.length === 0) {
            console.log("The singly linked lis tis empty.");
            return;

        }
        // If the length is 1
        if (this.length === 1) {
            // let the head pointer point to null
            this.head = null;
            // Let the tail pointer point to null
            this.tail = null;
            // Decrement the length
            this.length--;
            return;

        }
        // If the length is more than 1
        // Declare the removedData and store the tail.value to the removedData
        var removedData = this.tail.value;
        // Move the tail pointer
        this.tail = this.tail.prev;
        // Let tail.next point to null
        this.tail.next = null;
        // Decrement the length
        this.length--;
        // Return the removedData
        return removedData;

    }

    remove(index) {
        // If the index < 0 or index >= length
        if (index < 0 || index >= this.length) {
            console.log("Index out of range");
            return;

        }
        // If the length is 0
        if (this.length === 0) {
            console.log("The singly linked list is empty.");
            return;

        }
        // If the length is 1
        if (this.length === 1) {
            // Let the head pointer point to null
            this.head = null;
            // Let the tail pointer point to null
            this.tail = null;
            // Decrement the length
            this.length--;
            return;

        }
        // If the length is more than 1
        // Remove the first node
        if (index === 0) {
            return this.removeFirst();

        }
        // Remove the last node
        if (index === this.length - 1) {
            return this.removeLast();

        }
        // Remove node in the middle
        // The node is in the first half of the list
        if (index <= this.length / 2) {
            // Traverse from the head
            // Copy the head pointer and store the address to tmpPointer
            var tmpPointer = this.head;
            // Move the tmpPointer to index - 1
            for (let i = 0; i < index - 1; i++) {
                tmpPointer = tmpPointer.next;

            }

            // Declare the prevNode
            var prevNode = tmpPointer;
            // Declare the nextNode
            var nextNode = tmpPointer.next.next;
            // Declare the currentNode
            var currentNode = tmpPointer.next;
            // Declare the removedData
            var removedData = currentNode.value;
            // Let prevNode.next point to the nextNode
            prevNode.next = nextNode;
            // Let nextNode.prev point to the prevNode
            nextNode.prev = prevNode;
            // Let the currentNode.next point to null
            currentNode.next = null;
            // Let the currentNode.prev point to null
            currentNode.prev = null;
            // Decrement the length
            this.length--;
            // Return the removedData
            return removedData;

        }

        // The node is in the second half of the list
        else if (index > this.length / 2) {
            // Traverse from the tail
            // Copy the tail pointer and store the address to tmpPointer
            var tmpPointer = this.tail;
            // Move the tmpPointer to index - 1
            for (let i = 0; i < this.length - 1 - index + 1; i++) {
                tmpPointer = tmpPointer.prev;

            }

            // Declare the prevNode
            var prevNode = tmpPointer;
            // Declare the nextNode
            var nextNode = tmpPointer.next.next;
            // Declare the currentNode
            var currentNode = tmpPointer.next;
            // Declare the removedData
            var removedData = currentNode.value;
            // Let prevNode.next point to the nextNode
            prevNode.next = nextNode;
            // Let nextNode.prev point to the prevNode
            nextNode.prev = prevNode;
            // Let the currentNode.next point to null
            currentNode.next = null;
            // Let the currentNode.prev point to null
            currentNode.prev = null;
            // Decrement the length
            this.length--;
            // Return the removedData
            console.log("tail");
            return removedData;

        }

    }

    show() {
        //Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        var listStr = "";
        // Linked list traversal
        // The tmpPointer stops at the last node
        while (tmpPointer !== null) {
            // Print the value
            listStr = listStr + tmpPointer.value + " -> ";
            // Move the tmpPointer
            tmpPointer = tmpPointer.next;

        }
        // // Linked list traversal
        // for (let i = 0; i < this.length; i++) {
        //     // Print the value
        //     listStr = listStr + tmpPointer.value + " -> ";
        //     // Move the tmpPointer
        //     tmpPointer = tmpPointer.next;
        //
        // }

        console.log(listStr + "null");

    }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(3, 6);
myLinkedList.show();
console.log(myLinkedList.remove(3));
myLinkedList.show();



















