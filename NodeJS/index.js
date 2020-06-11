require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var productController = require('./controllers/productController.js');
var userController = require('./controllers/userController.js');
var cartController = require('./controllers/cartController.js');
var orderController = require('./controllers/orderController.js');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);
app.use('/products', productController);
app.use('/users', userController);
app.use('/carts', cartController);
app.use('/orders', orderController);

