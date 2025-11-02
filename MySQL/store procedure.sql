use teacher;

-- DELIMITER: This is used to change the statement delimiter from the default ; to another character 
-- (// in this case). This allows MySQL to interpret the entire procedure as a single statement.

-- CREATE PROCEDURE: This statement is used to create a new stored procedure.

-- procedure_name: This is the name you give to your stored procedure.

-- BEGIN ... END: This encloses the body of the stored procedure. All SQL statements for 
-- the procedure go between BEGIN and END.

-- SQL statements: These are the actual SQL statements that define the functionality of your 
-- stored procedure. In this example, it's a simple SELECT statement.

-- DELIMITER ; : This resets the delimiter back to ;.



DELIMITER //

CREATE PROCEDURE selectEmployee()
BEGIN
    -- SQL statements for the procedure
    SELECT * FROM employee;
END//

DELIMITER ;

call selectEmployee;


-- (IN param1 INT, IN param2 VARCHAR(255)): These are the input parameters for your stored procedure.
-- IN indicates that these are input parameters,
-- and you specify their names and data types (INT and VARCHAR(255) in this example).


DELIMITER //
CREATE PROCEDURE insertEmployee(IN id INT,IN ename VARCHAR(255), IN city VARCHAR(255), IN salary VARCHAR(255))
BEGIN
    -- SQL statements for the procedure
   insert into  employee(id, ename, city, salary) values (id, ename, city, salary);
END //

DELIMITER ;

call insertEmployee(501,'mayuresh', 'navi mumbai', 500000);