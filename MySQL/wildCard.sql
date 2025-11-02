use teacher;
select * from person;
select * from person where name like 'a%';
select * from person where name like '%z';
select * from person where name like '%Y%';
select * from person where name like '%y%';

select * from person where name like '_b_';
select * from person where name like '__c';

select * from person where name like '_q%';



create table employee (id int, ename varchar(50), city varchar(50), salary int);
insert into employee values (101, "raj", "mumbai", 10000), (102, "sagar", "mumbai", 20000),
 (103, "raju", "thane", 5000), (104, "john", "thane", 30000), (105, "joseph", "raigarh", 500000);
 select * from employee;
 
 select  city, count(city) from employee group by city;
 
 #min(), max(), avg(), sum(), count()
 
select count(ename) as "count of emp" from employee;
 
select min(salary) as "minimum salary" from employee;
  
select max(salary) as "maximum salary" from employee;
   
select sum(salary) as "sum of salary" from employee;
    
select avg(salary) as "avg of salary" from employee;
    
select city, sum(salary) as "city per employee" from employee where city = "mumbai";
    
select city, avg(salary) as "city per employee" from employee where city = "mumbai";
        

########### having clouse 
        
select city, min(salary) from employee group by city having min(salary) > 5000;

select count(city), sum(salary), city from employee group by city having sum(salary) > 50000;


################## view in sql
select * from employee;

create view Mumbai_employee as
select id, ename, city from employee where city = "mumbai";

select * from  Mumbai_employee;