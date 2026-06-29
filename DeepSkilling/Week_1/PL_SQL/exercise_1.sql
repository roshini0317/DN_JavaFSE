//Author: V Roshini
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

INSERT INTO Customers VALUES (101,'Rohit',65,15000,'FALSE');
INSERT INTO Customers VALUES (102,'Anita',45,9000,'FALSE');
INSERT INTO Customers VALUES (103,'Rahul',70,25000,'FALSE');
INSERT INTO Customers VALUES (104,'Priya',30,8000,'FALSE');
INSERT INTO Customers VALUES (105,'Kiran',62,12000,'FALSE');

COMMIT;
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,

    CONSTRAINT fk_customer
    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);
INSERT INTO Loans VALUES
(1,101,9.5,DATE '2026-07-10');

INSERT INTO Loans VALUES
(2,102,8.5,DATE '2026-08-15');

INSERT INTO Loans VALUES
(3,103,10.0,DATE '2026-07-20');

INSERT INTO Loans VALUES
(4,104,9.0,DATE '2026-09-01');

INSERT INTO Loans VALUES
(5,105,8.0,DATE '2026-07-05');

COMMIT;

DECLARE

CURSOR c_customer IS
SELECT CustomerID,Age
FROM Customers;

BEGIN

FOR cust IN c_customer LOOP

IF cust.Age > 60 THEN

UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE CustomerID = cust.CustomerID;

DBMS_OUTPUT.PUT_LINE(
'Interest Reduced for Customer '
||cust.CustomerID);

END IF;

END LOOP;

COMMIT;

END;
/

DECLARE

CURSOR c_customer IS
SELECT CustomerID,Balance
FROM Customers;

BEGIN

FOR cust IN c_customer LOOP

IF cust.Balance > 10000 THEN

UPDATE Customers
SET IsVIP='TRUE'
WHERE CustomerID=cust.CustomerID;

DBMS_OUTPUT.PUT_LINE(
'VIP Granted to '
||cust.CustomerID);

END IF;

END LOOP;

COMMIT;

END;
/
DECLARE

CURSOR c_loan IS
SELECT LoanID,
CustomerID,
DueDate
FROM Loans
WHERE DueDate BETWEEN SYSDATE
AND SYSDATE+30;

BEGIN

FOR loan IN c_loan LOOP

DBMS_OUTPUT.PUT_LINE(
'Reminder : Customer '
||loan.CustomerID||
' Loan '
||loan.LoanID||
' Due on '
||loan.DueDate);

END LOOP;

END;
/