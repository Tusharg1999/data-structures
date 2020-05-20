class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }
  addAfterPositon(data,position){
      const newNode=new Node(data);
      let current=this.head;
      for(let i=0;i<position-1;i++){
        current=current.next;
      }
      newNode.next=current.next;
      current.next=newNode;
  } 

  removeAtPosition(position){
    let current=this.head;
    for(let i=0;i<position-2;i++){
        current=current.next;
    }
    var temp=current.next.next
    current.next=temp;
  }
  //print node functions

  dataAtPosition(position){
   let current=this.head;
   for(let i=0;i<position-1;i++){
       current=current.next;
   }
   console.log("data:"+current.data);
   
  }
  display() {
    let current = this.head;
    let s = "";
    while (current != null) {
      s = s + current.data + " -> " + (current.next == null ? "NULL" : "");
      current = current.next;
    }
    console.log(s);
  }
}

const list = new LinkedList();
list.add(3);
list.add(765);
list.add(43);
list.add(423);
list.add(3);
list.addAfterPositon(300,2)
list.removeAtPosition(0)
list.display();
