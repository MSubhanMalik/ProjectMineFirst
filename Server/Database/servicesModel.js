const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    image: {type: String, required: true}, 
    description: {type: String, required: true}, 
    url: {type: String, required: true}
})

const servicesModel = new mongoose.model("Services", servicesSchema)
module.exports = servicesModel