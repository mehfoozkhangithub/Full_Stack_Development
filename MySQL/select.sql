use teacher;

create table Student (id int, s_name varchar(50),address varchar(50), course varchar(50));

insert into Student values 
(4, "sagar", "nalasopara", "MySQL"), 
(5, "abc", "mumbai", "js"), 
(6, "xyz", "mumbai", "MySQL");

select * from Student;

select * from Student where id =1;

select * from Student where address ="mumbai";

select distinct address  from student;

select * from student where address = "mumbai" AND course = "js"; 

select * from student where address = "mumbai" AND course = "html"; 

select * from student where address = "navi mumbai" OR course = "js";

select * from student where NOT address = "mumbai";

select * from student;

select * from student order by s_name ASC;

select * from student order by id DESC;

select * from student order by s_name DESC;

select * from Student limit 2 ;

select * from Student order by id Desc limit 1 ;

select * from Student limit 1,1 ;

select * from Student where s_name  In ("sagar", "abc");

select * from Student where s_name Not In ("sagar", "abc");

select * from Student where id  between 2 and 4;

select * from Student where id Not between 2 and 4;

