const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    name: { type: String },
    description : { type: String },
    price: { type: Number }
});

module.exports = { 
    Product
};