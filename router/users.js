const express= require("express");//here we import express framework which is nodejs web apllication framework
const router = express.Router();//this is the method  for routing in express
const Users = require("../models/schema") // here we import schema of the data

router.get('/users', async(req,res)=>{   // this is the first route for getting all the data from the database and print in json format URL-localhost:3000/api/users
    const users= await Users.find() // .find method is a mongodb method which print or retrieve all the from the database
    res.status(200).send(users)
})

router.post("/user",async(req,res)=>{ //this is the post route for adding  a new user --- localhost:3000/api/user
    try {
        const addinguser = new Users(req.body); // here this req.body request from the server to get input
        console.log(addinguser);
        const savinguser = await addinguser.save()// here all the data saved to the database 
        res.send(savinguser) // res.send is used to show the data
    } catch (error) {
        console.log(error)
    }
})


router.get("/users/:id",async(req,res)=>{  // this route is for geting only one user at a time with the given id
    try {
        const findinguser = await Users.findOne({id:req.params.id}) // User.findOne is a mongodb method used for searching a data with a attribute 
        res.send(findinguser)
    } catch (err) {
        console.log(err)
    }
})
router.delete("/users/:id",async(req,res)=>{  // this route is for deleting a specific document from the database by providing id
    try {
        Users.remove({id:req.params.id})  //.remove is a mongodb method used for deleting element from the data base --- here req.params.id is user provided id and id is in the data and 
        res.send(`${req.params.id} id is removed from the database`) 
    } catch (err) {
        console.log(err)
    }
})
//put http method udpate whole client side sent data whereas patch update only that data which is asked or need to update 

router.put("/users/:id",async(req,res)=>{  
        Users.findOneAndUpdate({id:req.params.id},{  // .findOneAndUpdate is mongodb method for finding and updating a field
            $set:{
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                companyname:req.body.companyname,
                Age:req.body.Age,
                email:req.body.email,
                zip:req.body.zip,
                city:req.body.city,
                state:req.body.state,
                web:req.body.web
            }
        }).then(result=>{
            res.status(200).send(`updation complete`)
        })
        .catch((err)=>{
            res.status(500).send(err)
            console.log(err)
        })
})
module.exports = router   // exporting the router instance 