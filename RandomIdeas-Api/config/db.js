const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to db')
}

module.exports = connectDB;