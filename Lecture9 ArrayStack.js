class ArrayStack {
    constructor() {
        this.array = [];

    }

    peak() {
        return this.array[this.array.length - 1];
    }

    push(data) {
        this.array.push(data);

    }

    pop() {
        return this.array.pop();

    }

    show() {
        console.log(this.array);

    }

}

var arrayStack = new ArrayStack();
arrayStack.push(100);
arrayStack.push(200);
arrayStack.push(300);
arrayStack.show();
console.log(arrayStack.pop());
arrayStack.show();
console.log(arrayStack.peak());