class ImplementingArray {
    constructor() {
        this.currentSize = 0;
        this.array = {};

    }

    // Add last
    // O(1)
    addLast(data) {
        // Add data to the last index
        this.array[this.currentSize] = data;
        // Increment the currentSize
        this.currentSize++;

    }

    // Remove last
    // O(1)
    removeLast() {
        // If the currentSize is 0, return null
        if (this.currentSize === 0) {
            return null;

        }

        // Store the last data in removedData
        var removedData = this.array[this.currentSize - 1];

        // delete the last data
        delete this.array[this.currentSize - 1];

        // Decrement the currentSize
        this.currentSize--;

        // Return the removedData
        return removedData;

    }

    // Add first
    addFirst(data) {
        // Copy data at index to index + 1
        for (let i = this.currentSize - 1; i >= 0; i--) {
            this.array[i + 1] = this.array[i];

        }
        // Copy data to the first index
        this.array[0] = data;
        // Increment the currentSize
        this.currentSize++;

    }

    // Remove first
    removeFirst() {
        // If the currentSize is 0, return null
        if (this.currentSize === 0) {
            return null;

        }

        // Store the first data to removedData
        var removedData = this.array[0];

        // Copy data at index to index - 1
        for (let i = 1; i <= this.currentSize - 1; i++) {
            this.array[i - 1] = this.array[i];

        }

        // Delete the last data
        delete this.array[this.currentSize - 1];

        // Decrement the currentSize
        this.currentSize--;

        // Return the removedData
        return removedData;

    }

}

var implementingArray = new ImplementingArray();
implementingArray.addLast("Computer");
implementingArray.addLast("Science");
console.log(implementingArray.array);
console.log(implementingArray.removeLast());
implementingArray.addLast("Student");
implementingArray.addFirst("Programming");
implementingArray.addFirst("Coding");
console.log(implementingArray.array);
console.log(implementingArray.removeFirst());
console.log(implementingArray.array);









