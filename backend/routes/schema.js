import mongoose from 'mongoose'

//singup page
const newuser=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const register =new mongoose.model('signup', newuser,'signup')

//item registration page
const itemregistration=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    image:{
        type:Buffer,
        contentType:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    hours:{
            type:Number,
            required:true,
            min:0,
            max:99
        },
    minutes:{
            type:Number,
            required:true,
            min:0,
            max:59
    },
    minprice:{
        type:Number,
        required:true
    }
})

const sell=new mongoose.model('sell',itemregistration,'sell')

const questions=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    ques:{
        type:String,
        reuired:true
    }
})

const ques=new mongoose.model('questions',questions,'questions')



export {register , sell , ques}