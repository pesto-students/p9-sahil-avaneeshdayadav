show databases;
create database warehouses;
use warehouses;


-- while creting a foreign key constraint between two tables, adding an index 
-- on referenced colm in the referenced table is not always req. However in 
-- in some database system, an index on the referenced colm is necessary or 
-- or recomended for optimal performance and to ensure efficient lookup of the
-- referenced values.

create table cities(
city char(20),
state char(20),
index idx_city(city)
);

create table warehouses(
 wid int,
 wname char(30),
 location char(20),
 extra_content json,
 city char(20),
 index idx_wid(wid),
 foreign key (city) references cities(city)
);

create table stores(
 sid int,
 store_name char(50),
 location_city char(20),
 warehouse_id int,
 index idx_store_id(sid),
 foreign key (warehouse_id) references warehouses(wid)
);

create table customer(
 cno int,
 cname char(50),
 addr varchar(50),
 cu_city char(20),
 index idx_cno(cno)
);

create table orders(
 ono int,
 odate date,
 customerNo int,
 index idx_order_no(ono),
 foreign key (customerNo) references customer(cno)
);

create table items(
 itemno integer,
 descriptions text,
 weight decimal(5,2),
 cost decimal(5,2),
 index idx_itemno(itemno)
);

create table order_items(
order_no int,
item_no int,
order_quantity int,
primary key (order_no, item_no),
foreign key (order_no) references orders(ono),
foreign key (item_no) references items(itemno)
);

create table store_items(
store_id int,
item_no int,
quantity int,
primary key (store_id, item_no),
foreign key (store_id) references stores(sid),
foreign key (item_no) references items(itemno)
);


