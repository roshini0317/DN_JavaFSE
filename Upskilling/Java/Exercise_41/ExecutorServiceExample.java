import java.util.concurrent.*;
class SquareTask implements Callable<Integer> {
    private int number;
    public SquareTask(int number) {
        this.number = number;
    }
    @Override
    public Integer call() {
        return number * number;
    }
}
public class ExecutorServiceExample {
    public static void main(String[] args)
            throws Exception {
        ExecutorService executor =
                Executors.newFixedThreadPool(3);
        Future<Integer> f1 =
                executor.submit(new SquareTask(5));
        Future<Integer> f2 =
                executor.submit(new SquareTask(10));
        Future<Integer> f3 =
                executor.submit(new SquareTask(15));
        System.out.println("Result 1: " + f1.get());
        System.out.println("Result 2: " + f2.get());
        System.out.println("Result 3: " + f3.get());
        executor.shutdown();
    }
}