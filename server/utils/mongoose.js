require('dotenv').config();
const mongoose = require('mongoose');
const { MONGO_URI } = process.env;  

if(!MONGO_URI) {
  throw new Error('MongoDB URI is not defined in environment variables');
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);   
    }
}

module.exports = connectDB;