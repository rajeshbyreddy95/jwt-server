const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()


const MONGO_URI = process.env.MONGO_URI;

const connectDB=async()=>{
    try {
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser :true,
            useUnifiedTopology: true
        })
        console.log('====================================');
        console.log('mongodb connected ');
        console.log('====================================');
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

module.exports = connectDB;