let mongoose = require('mongoose');
/*
    Have to CD on Windows to C:\Program Files\MongoDB\Server\3.4\bin

    ./mongod.exe --dbpath /Users/Koral/mongo-data
*/
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017');

module.exports = { 
    mongoose
}