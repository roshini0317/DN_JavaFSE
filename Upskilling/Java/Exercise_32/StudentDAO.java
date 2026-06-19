import java.sql.*;
public class StudentDAO {
    private static final String URL =
            "jdbc:mysql://localhost:3306/studentdb";
    private static final String USER = "root";
    private static final String PASSWORD = "root";
    public void insertStudent(int id, String name, int age) {
        String sql =
                "INSERT INTO students(id,name,age) VALUES(?,?,?)";
        try (
                Connection con =
                        DriverManager.getConnection(URL, USER, PASSWORD);
                PreparedStatement ps =
                        con.prepareStatement(sql)
        ) {
            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);
            int rows = ps.executeUpdate();
            System.out.println(rows + " row inserted.");
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    public void updateStudent(int id, String newName) {
        String sql =
                "UPDATE students SET name=? WHERE id=?";
        try (
                Connection con =
                        DriverManager.getConnection(URL, USER, PASSWORD);
                PreparedStatement ps =
                        con.prepareStatement(sql)
        ) {
            ps.setString(1, newName);
            ps.setInt(2, id);
            int rows = ps.executeUpdate();
            System.out.println(rows + " row updated.");
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();
        dao.insertStudent(4, "David", 23);
        dao.updateStudent(4, "David Kumar");
    }
}