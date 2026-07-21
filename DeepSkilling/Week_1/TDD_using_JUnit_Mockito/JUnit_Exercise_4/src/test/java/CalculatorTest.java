//Author: V Roshini
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
public class CalculatorTest {
    private Calculator calculator;
    @Before
    public void setUp() {

        System.out.println("Setting up test data...");
        calculator = new Calculator();
    }
    // Test method using AAA Pattern
    @Test
    public void testAddition() {
        int numberOne = 10;
        int numberTwo = 5;
        int result = calculator.add(numberOne, numberTwo);
        assertEquals(15, result);
    }
    // Teardown method executed after each test
    @After
    public void tearDown() {
        System.out.println("Cleaning up resources...");
        calculator = null;
    }
}