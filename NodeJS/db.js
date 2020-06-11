const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@52.77.251.157/WADSFP?authSource=admin', (err) => {
    if (!err)
        console.log('MongoDB connection succeded...');
    else
        console.log(err);
        // console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
})
module.exports == mongoose;