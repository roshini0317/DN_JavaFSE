//Author : V Roshini
import org.junit.Test;
import static org.junit.Assert.*;
//working out different methods in assertions
public class AssertionsTest {
    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }
}