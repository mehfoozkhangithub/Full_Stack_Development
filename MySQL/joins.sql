create database shopping;
use shopping;


create table custemer(c_id int , c_name varchar(50)); 
insert into custemer values
#(1, "abc"), (2, "xyz"), (3, "pqr"), (4, "hij")
(5, "fff"), (6, "ggg");
select * from custemer;

create table c_order(o_id int , amount int, custemer int); 
insert into c_order values
#(101, 499, 1), (201, 399, 1), (301, 199, 4), (401, 600, 3)
(101, 499, 10), (201, 399, 11), (301, 199, 40);
select * from c_order;

#The SQL JOIN statement is used to combine rows from two tables based on a common column and selects records that have matching values in these columns.

select custemer.c_id, custemer.c_name, c_order.amount   from custemer 
join 
c_order
 on custemer.c_id = c_order.custemer;

select custemer.c_id, custemer.c_name, c_order.amount   from custemer 
inner join 
c_order on custemer.c_id = c_order.custemer;

###

select custemer.c_id, custemer.c_name,  # left side table with all columns
c_order.amount, c_order.o_id, c_order.custemer  # right side table with all columns
 from custemer 
left join 
c_order on custemer.c_id = c_order.custemer
union
select custemer.c_id, custemer.c_name,  # left side table with all columns
c_order.amount, c_order.o_id, c_order.custemer  # right side table with all columns
 from custemer 
right join 
c_order on custemer.c_id = c_order.custemer;


select custemer.c_id, custemer.c_name,  # left side table with all columns
c_order.amount, c_order.o_id, c_order.custemer  # right side table with all columns
 from custemer 
full outer join 
c_order on custemer.c_id = c_order.custemer;


select * from custemer 
cross join 
c_order ;


#self join
select * from custemer as c1, custemer as c2 where c1.c_name = c2.c_name;





