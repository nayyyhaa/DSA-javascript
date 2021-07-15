//Queue

//Methods : enqueue, dequeue

/*========General way w/ arrays:==========*/
let exQueue = [];

//push
exQueue.push(5);

//pop at front
exQueue.shift();

/*=========Custom Queue=========*/

class Queue {
    constructor() {
        //key-value pair object 
        this.value = {};
        //head = front for removal
        this.front = 0;
        //tail - rear for insertion
        this.rear = 0;
    }

    enqueue(val) {
        //insert val & then increment rear and @that position, 
        this.value[this.rear++] = val;
    }

    dequeue() {
        //store removed value from front
        let removedVal = this.value[this.front];
        //delete the element
        delete this.value[this.front];
        //increment front
        this.front++;
        return removedVal;
    }
}

//Calling functions

const queue = new Queue()

queue.enqueue('mercury')
queue.enqueue('venus')
queue.enqueue('earth')

// console.log(queue);
// Queue { value: { '0': 'mercury', '1': 'venus', '2': 'earth' },
//     front: 0,
//     rear: 3
// }

queue.dequeue();

// console.log(queue);
// Queue { value: { '1': 'venus', '2': 'earth' }, front: 1, rear: 3 }
