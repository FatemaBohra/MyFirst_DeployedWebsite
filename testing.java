import java.util.Scanner;

class Scratch {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int count = in.nextInt();

        int even = 0;
        System.out.println(even);

        int x = 1;
        while(x < count){
            even = even + 2;
            System.out.println(even);
            x++;
        }
        System.out.println(x);
    }
}
