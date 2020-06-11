const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    status: { type: String },
    totalPrice: { type: Number},
    carts: [
        {
        _id: { type: String },
        name: { type: String },
        price: { type: Number },
        productId: { type: String },
        sellerId: { type: String },
        buyerId: { type: String },
        }
    ]
});

module.exports = { 
    Order
};