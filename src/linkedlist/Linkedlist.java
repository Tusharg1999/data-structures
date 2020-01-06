package linkedlist;

import javax.swing.plaf.synth.SynthLookAndFeel;
import java.util.Scanner;

public class Linkedlist {
    public static void main(String[] args) {
        char input;
        LList<Character> list= new LList<>();
        Scanner scanner=new Scanner(System.in);
        System.out.println("Do you want to add more item:y/n");
        input=scanner.next().charAt(0);
        while(input=='y'){
            System.out.println("Enter element");
            char ch=scanner.next().charAt(0);
            list=list.insert(list,ch);
            System.out.println("Do you want to add more item:y/n");
            input=scanner.next().charAt(0);
        }
        list.printList(list);

    }
}
