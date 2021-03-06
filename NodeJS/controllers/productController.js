const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const checkAuth = require('../middleware/check-auth');
var { Product } = require('../models/product');

// => localhost:3000/products/
router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/sellerId/:sellerId', (req, res) => {
    Product.find({ sellerId: req.params.sellerId }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});

// parses Product objects into var emp, save it to 
// Post Requests
// add data
router.post('/', (req, res) => {
    var emp = new Product({
        name: req.body.name,
        sellerId: req.body.sellerId,
        description: req.body.description,
        price: req.body.price,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// normal object emp, no longer Product files 
// update data
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findByIdAndUpdate(req.params.id, { $set:
        {
          description: 'desc changed'
        }
         }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;