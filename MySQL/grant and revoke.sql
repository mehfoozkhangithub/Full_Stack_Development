select user();

create user 'shubham'@'localhost' identified by 'shubham';

show grants for 'shubham'@'localhost';

grant select on nettech.teacher to 'shubham'@'localhost';

revoke select on nettech.teacher from 'shubham'@'localhost';
