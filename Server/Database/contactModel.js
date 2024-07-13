const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
})

contactSchema.methods.generateToken = function(){
    try {
        const jwtToken = jwt.sign({
            id: this._id.toString(),
            name: this.name,
            email: this.email, 
            message: this.email
        }, 
        process.env.SECRET_KEY_JWT_CONTACT
    )
        return jwtToken
    } catch (error) {
        console.log("Error in generating token for Contact : ", error)
    }
}

const contactModel = mongoose.model("Contact", contactSchema)
module.exports = contactModel