const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Cart } = require('../models/cart');


// => localhost:3000/carts/

// router.get('/', (req, res) => {
//     Cart.find((err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Cart.findById(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Retriving Cart :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// parses Cart objects into var cart, save it to 
// Post Requests
// add data
router.post('/', (req, res) => {
    var cart = new Cart({
        name: req.body.name,
        price: req.body.price,
        productId: req.body.productId,
        sellerId: req.body.sellerId,
        buyerId: req.body.buyerId,
    });
    cart.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Cart Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/buyerId/:buyerId', (req, res) => {
    Cart.find({ buyerId: req.params.buyerId }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Cart.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

// router.get('/', (req, res) => {
//     Cart.find((err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Cart.findById(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Retrieving Cart :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.get('/sellerId/:sellerId', (req, res) => {
//     Cart.find({ sellerId: req.params.sellerId }, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Retrieving Cart :' + JSON.stringify(err, undefined, 2)); }
//     });
// });



// normal object cart, no longer Cart files 
// update data
// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Cart.findByIdAndUpdate(req.params.id, { $set:
//         {
//           description: 'desc changed'
//         }
//          }, { new: true }, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Cart Update :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//         Cart.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Cart Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

module.exports = router;