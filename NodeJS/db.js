const mongoose = require('mongoose');

// checks connection
// mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
//     if (!err)
//         console.log('MongoDB connection succeded...');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// })
mongoose.connect('mongodb://localhost:27017/WADSFP', (err) => {
    if (!err)
        console.log('MongoDB connection succeded...');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
})
module.exports == mongoose;