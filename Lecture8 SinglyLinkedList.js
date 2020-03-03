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
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
console.log(myLinkedList);
myLinkedList.show();













