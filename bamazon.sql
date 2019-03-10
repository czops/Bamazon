DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

--look into how to include a dollar sign on the currency values
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", 5.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("table", "furniture", 30.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("desk", "furniture", 25.00, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("monitor", "gadgets", 90.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard", "gadgets", 38.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer", "gadgets", 270.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("microphone", "gadgets", 14.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("knife", "kitchen", 1.00, 51);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("spoon", "kitchen", 1.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dish", "kitchen", 4.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cup", "kitchen", 2.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bowl", "kitchen", 3.00, 15);

SELECT * FROM bamazon_db;

