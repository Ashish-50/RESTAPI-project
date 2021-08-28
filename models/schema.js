const mongoose = require("mongoose");

const userschema = mongoose.Schema({ // schema is a description of the database how data is stored in the database
    id:{
        type:Number,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    web:{
        type:String,
        required:true
    }
})
const Usersdetail = mongoose.model("Userdetail",userschema)  // here Userdetail is a  collection name and it gets plural in the database 
module.exports = Usersdetail // here we are exporting Useredtail so that we can use that