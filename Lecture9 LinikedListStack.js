class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.currentSize = 0;

    }

    peak() {
        return this.top.data;

    }

    push(data) {
        var newNode = new Node(data);
        // If the stack is empty
        if (this.currentSize === 0) {
            // Let the top pointer point to the newNode
            this.top = newNode;
            // let the bottom pointer point to the newNode
            this.bottom = newNode;
            // Increment the currentSize
            this.currentSize++;
            return;

        }

        // If the stack is not empty
        // Let the newNode.next point to the top
        newNode.next = this.top;
        // Move the top pointer
        this.top = newNode;
        // Increment the currentSize
        this.currentSize++;

    }

    pop() {
        // If the stack is empty
        if (this.currentSize === 0) {
            return null;

        }

        // If the stack has one node
        if (this.currentSize === 1) {
            // Declare the removedData and store the top.data to the removedData
            var removedData = this.top.data;
            // Let the top pointer point to null
            this.top = null;
            // Let the bottom pointer point to null
            this.bottom = null;
            // Decrement the currentSize
            this.currentSize--;
            return removedData;

        }

        // If the stack has more than one node
        // Declare the removedData and store the top.data to the removedData
        var removedData = this.top.data;
        // Move the top pointer
        this.top = this.top.next;
        // Decrement the currentSize
        this.currentSize--;
        return removedData;

    }

    show() {
        // Declare tmpPointer and store the address of the top pointer to the tmpPointer
        var tmpPointer = this.top;
        // Declare stackStr
        var stackStr = "";
        for (let i = 0; i < this.currentSize; i++) {
            // Print the data
            stackStr = stackStr + tmpPointer.data + " ";
            // Move the tmpPointer
            tmpPointer = tmpPointer.next;

        }

        console.log(stackStr);

    }

}

var linkedListStack = new LinkedListStack();
linkedListStack.push(100);
linkedListStack.push(200);
linkedListStack.push(300);
linkedListStack.show();
console.log(linkedListStack.peak());
console.log(linkedListStack.pop());
linkedListStack.show();
