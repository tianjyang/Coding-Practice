class Node {
  constructor(value){
    this.next = null;
    // this.prev = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  printList(){
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  addLink(value){
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let newLink = new Node(value);
      this.tail.next = newLink;
      this.tail = newLink;
    }
  }

  find(value){
    let node = this.head;
    while (node) {
      if (node.value===value){
        return node;
      }
      node = node.next;
    }
    return null;
  }

  delete(value) {
    let node = this.head;
    let nodeToDelete = node.next;
    while (nodeToDelete) {
      if (nodeToDelete.value===value){
        node.next = nodeToDelete.next;
      }
      node = node.next;
      nodeToDelete = nodeToDelete.next;
      return true;
    }
    return null;
  }
}

module.exports = LinkedList;
