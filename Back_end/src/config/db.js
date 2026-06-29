const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = async()=>{
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is missing. Create a .env file from .env.example.');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
}
module.exports = db;
