const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {type : String, required: true}, 
    email: {type : String, required: true}, 
    phoneNumber: {type : String, required: true},
    password: {type : String, required: true},
    isAdmin: {type : String, default: false}
})

userSchema.pre('save',async function(next){

    try {
        const SALT_KEY = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND))
        const hashedPassword = await bcrypt.hash(this.password, SALT_KEY)
        this.password = hashedPassword
        next()
    } catch (error) {
        console.log(error)
    }
})

userSchema.methods.generateToken = function(){
    try {
        const jwtToken = jwt.sign({
            id: this._id.toString(),
            name: this.name, 
            email: this.email, 
            phoneNumber: this.phoneNumber,
            password: this.password,
        }, 
        process.env.SECRET_KEY_JWT_USER
    )
    return jwtToken
    } catch (error) {
        console.log("Error in Generating Token for User: ", error)
    }
}

userSchema.methods.comparePassword = async function(password){
    try {
        const compared = await bcrypt.compare(password, this.password)
        return { compared, hashedPass: this.password }; // Changed line
    } catch (error) {
        console.log("Comparing Error : ", error)
    }
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel