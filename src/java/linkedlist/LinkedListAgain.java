package java.linkedlist;


class LL{
    static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    Node head;
    LL addItem(LL list,int data){
        Node new_node=new Node(data);
        if (list.head==null){
            list.head=new_node;
        }
        Node temp=list.head;
        while (temp.next!=null){
            temp=temp.next;
        }
        temp.next=new_node;
        return list;
    }
}

public class LinkedListAgain {
    LL ll=new LL();

}
