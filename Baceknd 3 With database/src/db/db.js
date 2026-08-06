const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

async function connectDB() {
    const url = process.env.URI
    await mongoose.connect(url)
    console.log(url);

    console.log("Connected DB");

}

module.exports = connectDB