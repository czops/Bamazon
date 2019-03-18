# Bamazon
Online store with database in MySQL

##Program Overview

* This application consists of a store database, and a basic CLI to interact with the database. 
The customer facing side can access the store database to purchase items, up to the stock quantity of the item. If a customer requests to purchase more than the stock quantity, the application will refuse the request.


* In order to run the application, run the bamazonCustomer.js file using node. The application will ask for the ID of the product that the customer wants to purchase.

* Once an item ID is entered, the application will ask for the quantity of products that the customer would like to purchase. If the quantity is less than or equal to the stock quantity of the item, then the application will allow the customer to purchase the items. If the quantity requested exceeds the stock quantity of the item, then the application will notify the customer of this issue, and restart the purchasing process.

* In order to exit the application, the customer must press Ctrl-c on the CLI, and the application will exit back to the termial input.

## Application Video Demo

* https://drive.google.com/file/d/1M6Q3ZzIKZdIuCLBjig8-uMt-jYAP1f_1/view


## Additional Notes

* Additional features to be added soon for the manager and supervisor roles, in additional to extra customer features.