//Author : V Roshini
//Singleton Design Pattern Implementation in Java
public class Main {
        public static void main(String[] args) {
        //creating multiple references to the Logger instance
        Logger loggerA = Logger.getInstance();
        Logger loggerB = Logger.getInstance();
        //Using the logger to log messages
        loggerA.logMessage("Application started");
        loggerB.logMessage("User data processed");
        System.out.println();
        //Printing hash codes to verify that both references point to the same instance
        System.out.println("Hash Code of loggerA : " + loggerA.hashCode());
        System.out.println("Hash Code of loggerB : " + loggerB.hashCode());
        //Singleton pattern verification
        if (loggerA == loggerB) {
            System.out.println("Singleton Pattern Verified");
        } else {
            System.out.println("Singleton Pattern Failed");
        }
    }
}