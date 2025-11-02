use teacher;

create table person (id int, name varchar(50), primary key (id));

insert into person values(3, "pqr"); 
select * from person;

desc person;

create table order_details (order_id int, order_number int,
p_id int,
primary key(order_id),
 foreign key (p_id) references person(id)); 
 
 
 insert into order_details values(107, 528, 2) ;
select * from order_details;