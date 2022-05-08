const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({origin: '*'}));
app.use(bodyParser.json());

app.post("/get-products-list", function(request, response){
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "andex_node",
        password: "admin",
        port: 3306
    });

    const params = [request.body.offset, request.body.limit];
    const sql = "SELECT `product_id`, `name_ru-RU`, `product_price`, `image` FROM `nenrc_jshopping_products` LIMIT ?, ?";
    connection.query(sql, params,
        function(err, results, fields) {
            const list = [];
            results.forEach(el => {
                list.push({
                    id: el['product_id'],
                    name: el['name_ru-RU'],
                    price: el['product_price'],
                    image: el['image'],
                })
            })
            response.send(JSON.stringify(list));
        }
    );
    connection.end();
});

app.listen(3000);

