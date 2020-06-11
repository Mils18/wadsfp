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

    // status: { type: String },
    // carts: [
    //     {
    //     _id: { type: String },
    //     name: { type: String },
    //     price: { type: Number },
    //     productId: { type: String },
    //     sellerId: { type: String },
    //     buyerId: { type: String },
    //     }
    // ]
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



// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//         Order.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.get('/', (req, res) => {
//     Order.find((err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Order.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Order :' + JSON.stringify(err, undefined, 2)); }
    });
});

// router.get('/sellerId/:sellerId', (req, res) => {
//     Order.find({ sellerId: req.params.sellerId }, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Retrieving Order :' + JSON.stringify(err, undefined, 2)); }
//     });
// });



// normal object order, no longer Order files 
// update data
// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Order.findByIdAndUpdate(req.params.id, { $set:
//         {
//           description: 'desc changed'
//         }
//          }, { new: true }, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//         Order.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

module.exports = router;