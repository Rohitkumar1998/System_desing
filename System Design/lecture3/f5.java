import java.io.*;
import java.util.*;

public class f1 {
  static class P {
    int d = 1;
    int d1 = 10;

    void fun(){
        System.out.println("P fun");
    }

    void fun1(){
        System.out.println("P fun1");
    }
  }

  static class C extends P {
    int d = 2;
    int d2 = 20;

    void fun(){
        System.out.println("C fun");
    }

    void fun2(){
        System.out.println("C fun2");
    }
  }
    
  public static void main(String[] args) throws NumberFormatException, IOException {
      // case 2 => C and p
      C obj = new P();
     // Why not allowed
     // If allowed, we will subsequently get run-time errors because C allows d, d1, d2, f, d1, fun2
     // but P (instance) only has d and d1, f and f1
  }


}

