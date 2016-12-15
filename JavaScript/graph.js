class Node {
  constructor(value){
    this.value = value;
    this.connectedEdge = [];
    // this.incomingEdge = [];
    // this.children = [];
    // this.parents = [];
  }

  addChildren(edge){
    this.connectedEdge.push(edge);
  }
}

class Edge {
  constructor(length){
    this.length = length;
    this.firstNode = null;
    this.secondNode = null;
  }

  otherNode(node){
    if (node === this.firstNode) {
      return this.secondNode;
    } else {
      return this.firstnode;
    }
  }

  setFirstNode(node){
    this.firstNode = node;
  }

  setSecondNode(node){
    this.secondNode = node;
  }
}

class Graph {
  constructor() {

  }

  connectNode(node1,node2,distance){
    let edge = new Edge(distance);
    node1.addChildren(edge);
    edge.setFirstNode(node1);
    edge.setSecondNode(node2);
  }

  printGraph(count=0,node) {
    if (count === 0) {
      this.visited = {};
    }
    let outputString = "";
    for (let i = 0; i < count; i++) {
      outputString += "*";
    }
    console.log(outputString + node.value);
    node.connectedEdge.forEach((el,_idx)=>{
      if (!this.visited[el.otherNode(node)]){
        this.visited[el.otherNode(node)] = true;
        this.printGraph(count+1,el.otherNode(node));
      } else {
        console.log(outputString+ "*" +el.otherNode(node).value);
      }
    });
  }
}
//
// let graph = new Graph;
// let sanJose = new Node("San Jose");
// let sanFran = new Node("San Francisco");
// let mtnView = new Node("Mountain View");
// let losGatos = new Node("Los Gatos");
//
// graph.connectNode(sanJose,sanFran,50);
// graph.connectNode(sanJose,mtnView,10);
// graph.connectNode(mtnView,sanFran,40);
// graph.connectNode(losGatos,sanJose,10);
// graph.connectNode(sanFran,sanJose,50);
//
// graph.printGraph(0,sanFran);

export default Graph;
