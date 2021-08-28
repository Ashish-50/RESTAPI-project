const express = require("express"); // importing express which is node js framework for web appplication
const app = express(); // here we are making a instance of express 
const port = process.env.PORT||3000; // here we are making port for server so that it can run 
const mongoose = require("mongoose"); // here we are importing mongoose which is a type of middleware which is used for connnecting mongodb and express application
const router = require("./router/users") // here we are importing routes

app.use(express.json()) // express.json is used to display data in json format if we dont do this then data is not readable by application and display error
app.use('/api',router) // here we are making a middle ware of rutiing 

mongoose.connect("mongodb+srv://Ashish:Backend@cluster0.vgss5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
).then(()=>{   // here we are connecting mongodb with express application and here we are setting this with mongodb atlas which iis a cloud storage 
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{ // this is also a route which is display on the first page 
    res.send("To access the api please go to the localhost:3000/api/users in the url")
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})