
public class Start2 {
    static class Person{
        int age;
        String name;
     
    void sayHi(){
        // int age=200;
        System.out.println(this.name+"{"+this.age+"} say hi");
    }
}
    public static void main(String[]args){
        Person p1=new Person();
        p1.age=10;
        p1.name="B";
        // p1.sayHi();
        Person p2=new Person();
        p2.age=20;
        p2.name="C"; 
        // p2.sayHi();
        Person p3=p2;
        p3.age=50;
        // p3.sayHi();
        // p2.sayHi();
        Person temp=p1;
        p1=p2;
        p2=temp;
        p1.sayHi();
        p2.sayHi();

        
   }

    
}
