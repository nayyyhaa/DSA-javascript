class LinkedList { 
    constructor() {
        // Initial values
        this.head = null;
        this.tail = null;
    }

    insertNode(val) {
        const newNode = {value: val, next:null}

        //checking edges
        if(!this.head) this.head = newNode; //if empty
        if(this.tail) this.tail.next = newNode; //if not empty
        this.tail = newNode;
    }

    prependNode(val) {
        const newNode = {value: val, next:this.head}

        //checking edges
        if(!this.tail) this.tail = newNode; //if empty
        //if(this.head) newNode.next = this.head; //or next:this.head
        this.head = newNode; 
    }

    deleteNode(val) {

        //if empty list
        if(!this.head) return;

        //if element at head
        while(this.head && this.head.value == val) {
            this.head = this.head.next;
        }

        //if element in middle/last
        let tempList = this.head;
        while(tempList.next) { //loop from 2nd ele
            if(tempList.next.value==val) tempList.next=tempList.next.next; //skip through
            else tempList = tempList.next;
        }

        //update tail
        if(this.tail.value == val) this.tail = tempList; //last iterated value;
    }

    findFirstOccurance(val) {

        let tempList = this.head;
        //let index = 0; for index
        while(tempList) {
            if(tempList.value == val) return tempList;  //index;
        //index++;
        tempList = tempList.next;
        }
        return -1;
    }

    insertAfter(val, afterVal) {
        let afterNode = findFirstOccurance(afterVal);
        if(afterNode) {
            const newNode = {value:val, next: afterNode.next}
            afterNode.next = newNode;
        }
        if(afterNode.value == this.tail.value) this.tail = newNode;
    }
    
      reverse() {
      let revList = null;
      let tempList = this.head;
      while (tempList) {
        let nextEl = tempList.next;
        tempList.next = revList;
        revList = tempList;
        tempList = nextEl;
      }
      return revList;
    };

    //LL to array
    toArray() { 
        const arr =[];
        let tempEl = this.head;
        while(tempEl) {
            arr.push(tempEl.value); //w/ val and next
            tempEl = tempEl.next;
        }
        return arr;
    }
}

const unionList = (list1, list2) => {
  let newList = new LinkedList();
  let l1head = list1.head;
  let l2head = list2.head;
  while (l1head) {
    if (!newList.firstOccurenceOf(l1head.value)) newList.insertNode(l1head.value);
    l1head = l1head.next;
  }
  while (l2head) {
    if (!list1.firstOccurenceOf(l2head.value) && (!newList.firstOccurenceOf(l2head.value))) newList.insertNode(l2head.value);
    l2head = l2head.next;
  }
  return newList.toArray();
}

const intersectionList = (list1, list2) => {
  let newList = new LinkedList();
  let l1head = list1.head;
  while (l1head) {
    if (list2.firstOccurenceOf(l1head.value)) newList.insertNode(l1head.value);
    l1head = l1head.next;
  }
  return newList.toArray();
};


//Calling functions

let ll = new LinkedList();
ll.insertNode(2);
ll.insertNode(3);
ll.deleteNode(2);
console.log(ll.toArray()); // [{next:.., value:..}, {next:.., value:..},...]

// union + intersection
const ll1 = new LinkedList();
ll1.insertNode(2);
ll1.insertNode(12);
ll1.insertNode(20);
ll1.insertNode(15);
const ll2 = new LinkedList();
ll2.insertNode(10);
ll2.insertNode(2);
ll2.insertNode(23);
ll2.insertNode(157);
ll2.insertNode(157);
ll2.insertNode(12);

console.log(unionList(ll1, ll2))
console.log(intersectionList(ll1, ll2))


