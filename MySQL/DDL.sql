use teacher;

desc teacher2;

alter table teacher2
 add column course varchar(50);
 
alter table teacher2 change column course fees int;

alter table teacher2 modify fees varchar(50);
 
 alter table teacher 
 drop column course;
 
 alter table teacher 
 rename to Teacher2;
 
 truncate table teacher2;
 
 select * from teacher2;
 
  alter table teacher2 modify id int primary key;