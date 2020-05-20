class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class SimpleTree {
  constructor() {
    this.root = null;
  }
  addNode(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, newNode) {
    // console.log("in insert node " + newNode.data);
    // console.log(currentNode);
    if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return;
      }
      this.insertNode(currentNode.left,newNode)
    }
    if (newNode.data > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      }
      this.insertNode(currentNode.right,newNode)
    }
  }
}

var simpleTree = new SimpleTree();
simpleTree.addNode(5);
simpleTree.addNode(4);
simpleTree.addNode(4);
simpleTree.addNode(1);
simpleTree.addNode(8);
simpleTree.addNode(7);
simpleTree.addNode(6);

console.log(JSON.stringify(simpleTree,null,2));
