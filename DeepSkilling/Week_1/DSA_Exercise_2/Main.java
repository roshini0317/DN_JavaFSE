import java.util.*;
public class Main {
    //Performs Linear Search
    public static Product linearSearch(Product[] products, int searchId) {
        for (Product product : products) {
            if (product.getProductId() == searchId) {
                return product;
            }
        }
        return null;
    }
    // Performs Binary Search
    public static Product binarySearch(Product[] products, int searchId) {
        int low = 0;
        int high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].getProductId() == searchId) {
                return products[mid];
            }
            if (products[mid].getProductId() < searchId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] productList = {
                new Product(104, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(109, "Watch", "Accessories"),
                new Product(103, "Mobile", "Electronics"),
                new Product(107, "Headphones", "Electronics")
        };

        //Sorted array for Binary Search
        Product[] sortedProductList = productList.clone();
        Arrays.sort(sortedProductList, (p1, p2) -> Integer.compare(p1.getProductId(), p2.getProductId()));
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Product ID:");
        int searchProductId=sc.nextInt();
        System.out.println("Linear Search");
        Product linearResult = linearSearch(productList, searchProductId);
        if (linearResult != null) {
            linearResult.displayDetails();
        } else {
            System.out.println("Product not found");
        }

        System.out.println("\nBinary Search");

        Product binaryResult = binarySearch(sortedProductList, searchProductId);

        if (binaryResult != null) {
            binaryResult.displayDetails();
        } else {
            System.out.println("Product not found");
        }
        sc.close();
    }
}