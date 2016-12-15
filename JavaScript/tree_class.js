class Node {
  constructor(value) {
    this.left = undefined;
    this.right = undefined;
    this.value = value;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(value){
    this.head = new Node(value);
  }

  addValue(value,node) {
    if (!node) {
      node = this.head;
    }

    if (value > node.value) {
      if (node.right) {
        this.addValue(value,node.right);
      } else {
        node.right = new Node(value);
      }
    } else {
      if (node.left) {
        this.addValue(value,node.left);
      } else {
        node.left = new Node(value);
      }
    }
  }

  printTree(count=0,node=this.head) {
    let outputString = "";
    for (let i = 0; i < count; i++) {
      outputString += "*";
    }
    console.log(outputString + node.value);
    if (node.left) {
      this.printTree(count+1,node.left);
    } else {
      console.log(outputString + "*" + "left Node Empty");
    }

    if (node.right) {
      this.printTree(count+1,node.right);
    } else {
      console.log(outputString + "*" + "right Node Empty");
    }

  }
}
// let bst = new BinarySearchTree(5);
// bst.addValue(1);
// bst.addValue(-11);
// bst.addValue(-5);
// bst.addValue(10);
// bst.addValue(11);
// bst.printTree();

module.exports = BinarySearchTree;
