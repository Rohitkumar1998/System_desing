
public class StaticType{
    static class BankAccount{
        int anum;
        int money;
        static int roi;
        void announce(){
            System.out.println(this.anum+" "+this.money+" "+roi);
        }


    }

    public static void main(String[]args){
        BankAccount a1=new BankAccount();
        a1.anum=10;
        a1.money=100;
        // a1.roi=4;
        // not a good practice to intisazle the obj with like this
        //static data member should be modified using class  not object
        BankAccount.roi=4;
        a1.announce();
        BankAccount a2=new BankAccount();
        a2.anum=20;
        // a2.roi=5;
        BankAccount.roi=6;
        a2.money=210;
        a2.announce();
        a1.announce();// her the vlue of a1 also will change


  

        
   }
}