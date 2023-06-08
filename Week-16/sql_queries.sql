-- Get min weight from the items table.
select min(weight) as min_wt from items;

-- Find different warehouses in 'pune'
select wid from warehouses w join cities c on w.city = c.city where c.city = 'pune';

-- Find details of items ordered by a customer 'Mr.Patil'
select * from items where itemno = (select item_no from order_items where order_no = (select ono from orders o where customerNo = (select cno from customer where cname = 'Mr.Patil')));

-- Find warehouse that has maximum stores.
select * from warehouses where wid = (select warehouse_id from stores group by warehouse_id order by count(*) DESC limit 1);

-- Find an item which is ordered minimum number of times.
select * from items where itemno = (select item_no from order_items group by item_no order by count(*) limit 1);

-- Find the detailed orders given by each customer.
select ono,odate,cno,addr,cu_city from orders o join customer c on c.cno = o.customerNo;



