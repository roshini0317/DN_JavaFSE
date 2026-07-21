public class VirtualThreadsExample {
    public static void main(String[] args)
            throws InterruptedException {
        for (int i = 1; i <= 1000; i++) {
            int task = i;
            Thread.startVirtualThread(() -> {
                System.out.println(
                        "Virtual Thread " + task
                );
            });
        }
        Thread.sleep(2000);
        System.out.println(
                "All Virtual Threads Completed"
        );
    }
}