import java.util.ArrayList;
import java.util.Scanner;
class ArrayListExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();
        System.out.print("How many names to add? ");
        int n = sc.nextInt();
        sc.nextLine();
        for(int i = 0; i < n; i++) {
            System.out.print("Enter name: ");
            String name = sc.nextLine();
            students.add(name);
        }
        System.out.println("\nStudent Names:");
        for(String s : students) {
            System.out.println(s);
        }
    }
}