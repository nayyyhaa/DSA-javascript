class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }
    insert(value) {
        //increase the size
        this.count++;

        let newNode = new Node(value);
        //recursive function
        let traverseTree = node => {
            //if value < node's value then, traverse left
            if(node.value > value){
                //if no left element -> append!
                if(!node.left) node.left = newNode;
                else traverseTree(node.left);
            } else {
                //if no right element -> append!
                if(!node.right) node.right = newNode;
                else traverseTree(node.right);
            }
        }
        traverseTree(this.root);
    }

    size() {
        return this.count;
    }

    contains(value) {
        //store current node for traversal
        let currNode = this.root;
        while(currNode) {
            //if element found -> return true!
            if(currNode.value == value) return true;
            //if element < current val -> traverse left
            else if(currNode.value > value) currNode = currNode.left;
            //if element > current val -> traverse right
            else currNode = currNode.right;
        }
        return false;
    }

    min() {
       //store temp (current) node for traversal
       let currNode = this.root;
       while(currNode.left) {
        currNode = currNode.left;
       }
       return currNode.value;
    }

    max() {
        //store temp (current) node for traversal
       let currNode = this.root;
       while(currNode.right) {
        currNode = currNode.right;
       }
       return currNode.value;
    }

    // DFS - depth first search - branch by branch

    // in-order
    // left, root, right
    // 2, 3, 12, 15, 28, 36, 39
    dfsInOrder() {
        //store travered values in inorderArr
       let inorderArr = []
       //create traversal function
       let traverseTree = node => {
           // if left child exists, go left again
           if(node.left) traverseTree(node.left);
           // store node's value in array
           inorderArr.push(node.value);
           // if right child exists, go right again
           if(node.right) traverseTree(node.right);
       }
       traverseTree(this.root);
       return inorderArr;
    }

    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {
        //store travered values in inorderArr
       let preorderArr = []
       //create traversal function
       let traverseTree = node => {
            // store node's value in array
            preorderArr.push(node.value);
            // if left child exists, go left again
            if(node.left) traverseTree(node.left);
            // if right child exists, go right again
            if(node.right) traverseTree(node.right);
        }
        traverseTree(this.root);
        return preorderArr;
    }

    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {
        //store travered values in inorderArr
       let postorderArr = []
       //create traversal function
       let traverseTree = node => {
            // if left child exists, go left again
            if(node.left) traverseTree(node.left);
            // if right child exists, go right again
            if(node.right) traverseTree(node.right);
            // store node's value in array
            postorderArr.push(node.value);
        }
        traverseTree(this.root);
        return postorderArr;
    }

    // BFS - breadth first search - level by level

    //Impln by queue!
    // 15, 3, 36, 2, 12, 28, 39
    bfs() {
        let result = [];
        let queue = [];

        //store current node
        queue.push(this.root);
        while(queue.length) {
            //take out first element from queue
            let currElement = queue.shift();
            result.push(currElement.value);
            // if left node exist -> push in queue
            if(currElement.left) queue.push(currElement.left);
            // if right node exist -> push in queue
            if(currElement.right) queue.push(currElement.right);
        }
        return result;
    }
}

//Checking out code!
const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.size());

console.log(bst.min())
console.log(bst.max())

console.log(bst.contains(2))
console.log(bst.contains(9))

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
console.log(bst.dfsInOrder())

// pre-order: 15, 3, 2, 12, 36, 28, 39
console.log(bst.dfsPreOrder())

// post-order: 2, 12, 3, 28, 39, 36, 15
console.log(bst.dfsPostOrder())

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
console.log(bst.bfs())

