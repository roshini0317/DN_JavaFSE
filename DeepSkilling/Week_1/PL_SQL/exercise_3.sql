//Author: V Roshini

CREATE OR REPLACE PROCEDURE procedure_name
IS
BEGIN
   -- SQL statements
END;
/

CREATE TABLE Customers(
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50)
);

INSERT INTO Customers VALUES(101,'Rohit');
INSERT INTO Customers VALUES(102,'Anita');
INSERT INTO Customers VALUES(103,'Rahul');

COMMIT;

CREATE TABLE Accounts(
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,

    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);

INSERT INTO Accounts VALUES(1001,101,'Savings',20000);
INSERT INTO Accounts VALUES(1002,102,'Savings',15000);
INSERT INTO Accounts VALUES(1003,103,'Current',30000);
INSERT INTO Accounts VALUES(1004,101,'Current',5000);

COMMIT;

CREATE TABLE Employees(
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);

INSERT INTO Employees VALUES(1,'John','IT',50000);
INSERT INTO Employees VALUES(2,'Mary','HR',40000);
INSERT INTO Employees VALUES(3,'David','IT',55000);
INSERT INTO Employees VALUES(4,'Rose','Finance',45000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType='Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
    'Monthly Interest Applied Successfully');

END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(

p_department IN VARCHAR2,

p_bonus IN NUMBER

)

IS

BEGIN

UPDATE Employees

SET Salary = Salary + (Salary*p_bonus/100)

WHERE Department = p_department;

COMMIT;

DBMS_OUTPUT.PUT_LINE(
'Bonus Updated Successfully');

END;
/

CREATE OR REPLACE PROCEDURE TransferFunds(

p_source IN NUMBER,

p_destination IN NUMBER,

p_amount IN NUMBER

)

IS

v_balance NUMBER;

BEGIN

SELECT Balance

INTO v_balance

FROM Accounts

WHERE AccountID=p_source;

IF v_balance>=p_amount THEN

UPDATE Accounts

SET Balance=Balance-p_amount

WHERE AccountID=p_source;

UPDATE Accounts

SET Balance=Balance+p_amount

WHERE AccountID=p_destination;

COMMIT;

DBMS_OUTPUT.PUT_LINE(
'Transfer Successful');

ELSE

DBMS_OUTPUT.PUT_LINE(
'Insufficient Balance');

END IF;

END;
/