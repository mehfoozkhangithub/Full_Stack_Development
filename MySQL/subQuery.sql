use shopping;

# use a subquery to select the first name of customer 
# with the highest c_id

select c_name, c_id from custemer where c_id = (select max(c_id) from custemer);

-- select all the rows from the Customers table
-- with the minimum c_id

select * from custemer where c_id =
(
select min(c_id) from custemer
);

#select the customers who have made orders

select * from c_order
where common_id in 
(select c_id from custemer);



########################### unoin 

select c_id, c_name from custemer
union
select o_id, amount from c_order; 

