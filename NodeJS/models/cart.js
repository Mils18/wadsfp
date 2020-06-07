const mongoose = require('mongoose');

var Cart = mongoose.model('Cart', {
    name: { type: String },
    price: { type: Number },
    productId: { type: String },
    sellerId: { type: String },
    buyerId: { type: String }
});

module.exports = { 
    Cart
};