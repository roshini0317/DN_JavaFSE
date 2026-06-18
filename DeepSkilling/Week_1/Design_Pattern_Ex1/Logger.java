class Logger {

    private static Logger instance;
    // Private constructor prevents object creation from outside the class
    private Logger() {
        System.out.println("Logger instance created");
    }
    // Thread-safe method to return the single Logger instance
    public static synchronized Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    // Method used for logging messages
    public void logMessage(String message) {
        System.out.println("[LOG] " + message);
    }
}