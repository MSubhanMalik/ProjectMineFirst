const mongoose = require('mongoose')
const dotENV = require('dotenv')
dotENV.config()

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('MongoDB connected Successfully')
    } catch (error) {
        console.log("MongoDB Error : ", error)
    }

}

module.exports = connectDB