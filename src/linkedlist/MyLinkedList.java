package linkedlist;

@SuppressWarnings("rawtypes")
class LList<T> {
    static class Node <T>{
        T data;
        Node next;

        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }
    Node head;

    public LList<Character> insert(LList<Character> list, T data){
        Node new_node=new Node(data);
        if (list.head==null){
            list.head=new_node;
        }
        else {
            Node temp=list.head;
            while (temp.next!=null){
                temp=temp.next;
            }
            temp.next=new_node;
        }
        return list;
    }
    void printList(LList<Character> list){
        System.out.print("My Linked List is:\t");
       Node temp=list.head;
       while (temp!=null){
           System.out.print(temp.data);
           temp= temp.next;
       }
    }
}
public class MyLinkedList{
    public static void main(String[] args) {
        LList<Character> list= new LList<>();

        list=list.insert(list,'T');
        list=list.insert(list,'U');
        list=list.insert(list,'S');
        list=list.insert(list,'H');
        list=list.insert(list,'A');
        list=list.insert(list,'R');

        list.printList(list);

    }
}