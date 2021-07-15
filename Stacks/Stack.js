//Stack

//Methods : push, pop, peek

/*========General way w/ arrays:==========*/
let exStack = [];

//push
exStack.push(5);

//pop
exStack.pop();

//peek - view element at top
let top = exStack[exStack.length-1];

/*=========Custom Stack=========*/

class Stack {
    constructor() {
        //key-value pair object 
        this.value = {};
        this.count = 0;
    }

    push(val) {
        //increment count and @that position, insert val
        this.value[++this.count] = val;
    }

    pop() {
        //store removed value
        let removedVal = this.value[this.count];
        //delete the element
        delete this.value[this.count];
        //decrement count
        this.count--;
        return removedVal;
    }

    peek() {
        return this.value[this.count];
    }
}

//Calling functions

const stack = new Stack()

stack.push('mercury')
stack.push('venus')
stack.push('earth')

stack.pop();

stack.peek();
