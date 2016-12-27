let LinkedList = require("./linkedlist");

const mergeSortedLinkedLists = (firstLink,secondLink) => {
  let outputHead = new LinkedList
  const returnValue = outputHead;

  if (!firstLink) {
    return secondLink;
  }

  if (!secondLink) {
    return firstLink;
  }

  while ( firstLink.head && secondLink.head ) {
    if ( firstLink.head.value > secondLink.head.value ) {
      outputHead.addLink(secondLink.head.value);
      secondLink.head = secondLink.head.next;
    } else {
      outputHead.addLink(firstLink.head.value);
      firstLink.head = firstLink.head.next;
    }
  }

  if (firstLink.head) {
    outputHead.tail.next = firstLink.head;
  } else {
    outputHead.tail.next = secondLink.head;
  }

  return(returnValue);

};


let a = new LinkedList;
let b = new LinkedList;
a.addLink(1);
a.addLink(5);
a.addLink(9);
a.addLink(13);
b.addLink(2);
b.addLink(6);
b.addLink(7);
b.addLink(20);
let c = mergeSortedLinkedLists(a,b);
c.printList();
