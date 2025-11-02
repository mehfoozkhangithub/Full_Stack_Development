# craete indexes 

use teacher;

create index demoIndex 
on employee(ename);

select * from employee where ename = 'john';

select * from employee where ename = 'john';

alter table employee
drop index demoIndex;

















DELIMITER //
create procedure insertPerson(IN id int, IN name varchar(200)) 
Begin
insert into person(id, name) values (id, name);
end 
//
DELIMITER ;

call insertPerson(101, 'sagar');

DELIMITER //
create procedure selectPerson() 
begin 
	select *  from person;
end
//
DELIMITER ;

call selectPerson();


call insertPerson(102, 'mayur');





