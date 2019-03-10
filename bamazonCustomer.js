var inquirer = require('inquirer');
var mysql = require('mysql');
const cTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Mi/amanqar0",
    database: "bamazon"
});


//this connect function is basically the start of your application

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // this function should display the items that are available for sale.
    startUp();
});

// startUp() = function () {

//     inquirer.prompt([
//         {
//             name: "action",
//             type: "list",
//             name: "doingWhat",
//             message: "What do you want to do?",
//             choices: [
//                 "Find songs by artist.",
//                 "List artists who made it to the top a lot.",
//                 "Return data within a sepcified range.",
//                 "Find info about a song.",
//                 "exit"
//             ]
//         }
//     ])


function startUp() {

    connection.query(
        "SELECT * FROM products",
        function (err, res) {
            console.log("Your query hit the DB");
            console.table(res);
            if (err) throw err;

            // re-prompt the user for if they want to bid or post
        });

    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "itemID",
                type: "input",
                message: "What product would you like to buy? Provide an ID: "
            },
            {
                name: "units",
                type: "input",
                message: "How many do you want to purchase? ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            //next you should have a function that checks the database and see how 
            //much of the product the store has

            connection.query(
                "SELECT stock_quantity FROM products WHERE ?",
                {
                    item_id: answer.itemID
                },
                function (err, res) {

                    console.log("Your query hit the DB");
                    console.table(res);
                    if (err) throw err;


                    if (res[0] < answer.units) {
                        console.log(res[0]);
                        console.log("Sorry, not enough units!")
                        //exit the function at this point?

                        startUp();
                    } else if (res[0] > answer.units || res[0] == answer.units) {
                    
                        connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [parseInt(answer.units) - parseInt(res[0]), answer.itemID], function (error, results, fields) {
                            if (error) throw error;

                            console.table(results);
                            // re-prompt the user for if they want to bid or post
                            startUp();
                        });

                    };

                });



        });
}

