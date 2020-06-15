const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Order } = require('../models/order');


// => localhost:3000/orders/

// parses Order objects into var order, save it to 
// Post Requests
// add data
router.post('/', (req, res) => {
    var order = new Order({
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        carts: req.body.carts,
    });
    order.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/buyerId/:buyerId', (req, res) => {
    Order.find({"carts.buyerId": req.params.buyerId}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/sellerId/:sellerId', (req, res) => {
    Order.find({"carts.sellerId": req.params.sellerId}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Order.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Order :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;