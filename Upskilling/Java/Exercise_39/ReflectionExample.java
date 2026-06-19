import java.lang.reflect.Method;
class TestClass {
    public void showMessage() {
        System.out.println("Method Invoked Successfully");
    }
}
public class ReflectionExample {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("TestClass");
            Object obj =
                    cls.getDeclaredConstructor()
                       .newInstance();
            Method[] methods =
                    cls.getDeclaredMethods();
            for(Method method : methods) {
                System.out.println(
                        "Method Name: "
                        + method.getName()
                );
                method.invoke(obj);
            }
        } catch(Exception e) {

            e.printStackTrace();
        }
    }
}