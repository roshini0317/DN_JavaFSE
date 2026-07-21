import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
public class TransactionExample {
    private static final String URL =
            "jdbc:mysql://localhost:3306/bankdb";
    private static final String USER = "root";
    private static final String PASSWORD = "root";
    public static void transferMoney(int fromAccount,
                                     int toAccount,
                                     double amount) {
        Connection con = null;
        try {
            con = DriverManager.getConnection(
                    URL,
                    USER,
                    PASSWORD
            );
            con.setAutoCommit(false);
            String debitQuery =
                    "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            String creditQuery =
                    "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            PreparedStatement debitStmt =
                    con.prepareStatement(debitQuery);
            PreparedStatement creditStmt =
                    con.prepareStatement(creditQuery);
            debitStmt.setDouble(1, amount);
            debitStmt.setInt(2, fromAccount);
            int debitRows = debitStmt.executeUpdate();
            creditStmt.setDouble(1, amount);
            creditStmt.setInt(2, toAccount);
            int creditRows = creditStmt.executeUpdate();
            if (debitRows > 0 && creditRows > 0) {
                con.commit();
                System.out.println(
                        "Transaction successful. ₹"
                                + amount
                                + " transferred."
                );
            } else {
                con.rollback();
                System.out.println(
                        "Transaction failed. Rollback executed."
                );
            }
        } catch (Exception e) {
            try {
                if (con != null) {
                    con.rollback();
                    System.out.println(
                            "Transaction rolled back."
                    );
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
            e.printStackTrace();
        } finally {
            try {
                if (con != null) {
                    con.setAutoCommit(true);
                    con.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    public static void main(String[] args) {
        transferMoney(1, 2, 500);
    }
}