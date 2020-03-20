
module.exports = function (){
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/test',{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

};