
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/todos';

mongoose.connection.on('connected', () => {
    console.log('mongoose default conection open to', dbURI);
});

mongoose.connection.on("error", err => {
    console.log("Mongoose default connection error: ", err);
});

exports.connect = next => {
    mongoose.connect(
        dbURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => {
            next();
        }
    )
};