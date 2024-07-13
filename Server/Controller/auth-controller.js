const express = require('express')
const userModel = require('./../Database/userModel')
const servicesModel = require('./../Database/servicesModel')
const contactModel = require('./../Database/contactModel')
const Home = (req, res, next) =>{
    res.status(200).send('Hello World')
}

// Contact 
// Login
// Register
// Services

const Register = async(req, res, next)=>{
    
    try {
        userExist = await userModel.findOne({email: req.body.email})
        if(!userExist){
            const userData = await userModel.create(req.body)
            res.status(200).json({msg: "User Created Successfully", Data :{
                id: userData._id.toString(), 
                token: userData.generateToken()
            }})
            
        }
        else(
            res.status(400).json({msg: "Registration Failed"})
        )
    } catch (error) {
        res.json({error})
        console.log("Reg error : ", error)
    }
  
}

const Contact = async(req, res)=>{
    try {
        //Authentication of Login
        const userExist = await userModel.findOne({email: req.body.email})
        if(userExist){
            try {
                const message = await contactModel.create(req.body)
                res.status(200).json({Status: "Message sent Successfully", data: {
                    token : message.generateToken(), 
                    id: message._id.toString(), 
                }})
            } catch (error) {
                console.log(`Contact Send Error : ${error}`)           
          
            }
        }
    } catch (error) {
        res.status(400).json({Error : "User Don't Exist"})
    }

}


const Login = async (req, res, next)=>{
    try {
        const userExist = await userModel.findOne({email: req.body.email})
        if(userExist){
            const {compared} = await userExist.comparePassword(req.body.password)
            
            
            if(compared){
                res.status(200).json({Status: "Logged in Successfully", data: {
                    token : userExist.generateToken(), 
                    id: userExist._id.toString(), 
                }})
            }
            else{
                res.status(400).json({msg: "Login Failed"})

            }
        }  
        else{
            res.status(400).json({msg: "Login Failed. Error in Comparing"})

        }      
    } catch (error) {
        console.log(error)
    }

}

const Services = async (req, res, next)=>{
    try {
        // Authentication
    } catch (error) {
        
    }
}

module.exports = {Home, Contact, Register, Login, Services}