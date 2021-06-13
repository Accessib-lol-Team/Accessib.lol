const mongoose = require("mongoose");
/* eslint-disable */
const dotenv = require("dotenv").config();
/* eslint-enable */

let count = 0;

const uri = process.env.MONGO_URI;

const options = {
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const connectWithRetry = () => {
    console.log("MongoDB connection with retry");
    mongoose
        .connect(uri, options)
        .then(() => {
            console.log("MongoDB is connected");
        })
        .catch((err) => {
            console.log(err);
            console.log(
                "MongoDB connection unsuccessful, retry after 5 seconds.",
                ++count
            );
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

exports.mongoose = mongoose;
