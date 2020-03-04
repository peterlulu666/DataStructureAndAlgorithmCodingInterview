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
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // Create a new node
        var newNode = {
            value: value,
            next: null
        };
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
            next: null
        };
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // Traverse to index - 1
        for (let i = 0; i < index - 1; i++) {
            tmpPointer = tmpPointer.next;

        }
        // Let the newNode.next point to tmpPointer.next
        newNode.next = tmpPointer.next;
        // Let the tmpPointer.next point to the newNode
        tmpPointer.next = newNode;
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
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // Traverse to the second last node
        for (let i = 0; i < this.length - 1 - 1; i++) {
            tmpPointer = tmpPointer.next;

        }
        // Store the removed data to removedData
        var removedData = tmpPointer.next.value;
        // let the tail pointer point to the second last node
        this.tail = tmpPointer;
        // Let the tmpPointer.next point to null
        tmpPointer.next = null;
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
            this.removeFirst();
            return;

        }
        // Remove the last node
        if (index === this.length - 1) {
            this.removeLast();
            return;

        }
        // Remove node in the middle
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // Traverse to the index - 1
        for (let i = 0; i < index - 1; i++) {
            tmpPointer = tmpPointer.next;

        }
        // Create a prevNode
        var prevNode = tmpPointer;
        // Create a nextNode
        var nextNode = tmpPointer.next.next;
        // Create a currentNode
        var currentNode = tmpPointer.next;
        // Let the prevNode.next point to the nextNode
        prevNode.next = nextNode;
        // Let the currentNode.next point to null
        currentNode.next = null;
        // Decrement the length
        this.length--;

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
myLinkedList.remove(6);
myLinkedList.show();



















