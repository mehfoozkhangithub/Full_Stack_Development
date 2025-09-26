create table person(id int unique,
 name varchar(20) not null,
 paidFees boolean default false,
 age int check(age > 18) );
 
 insert into person values (1, "rohit", false , 22);
  insert into person values (5, " dsfsdf ", true ,  17);
 
 select * from person;
 
 create table person2(id int ,
 name varchar(20) not null,
 primary key (id) );
 
 desc person2;
  desc person;
  
 alter table person modify id int primary key;
 
 
 
 
 