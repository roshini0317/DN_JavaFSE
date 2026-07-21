import java.util.Scanner;

public class Main {
    //Recursive method
    public static double forecastValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecastValue(currentValue * (1 + growthRate), growthRate,years - 1);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the present value, growth rate and number of years: ");
        double presentValue = sc.nextDouble();
        double growthRate = sc.nextDouble();
        int years = sc.nextInt();
        double futureValue = forecastValue(presentValue,growthRate,years);
        System.out.println("Current Value : Rs." + presentValue);
        System.out.println("Growth Rate : " + (growthRate * 100) + "%");
        System.out.println("Years : " + years);
        System.out.printf("Future Value : Rs.%.2f%n", futureValue);
        sc.close();
    }
}