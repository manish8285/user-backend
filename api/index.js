const express = require("express");
require("./db/conn")
const User = require("./models/users")
const cors = require('cors')
const app= express();
const PORT = process.env.PORT || 4000;

//return response as json
app.use(express.json()) 
//allow cors policy
app.use(cors())

app.get("/",(req,res)=>{
    res.json({
        name:"manish",
        age:23
    })
})

//get all users
app.get("/users",(req,res)=>{
    User.find({}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(401).send(err);
    })

})


//create new user
app.post("/users",(req,res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    })
    console.log(req.body);
})

// update user
app.put("/users/:id",(req,res)=>{
    var userid=req.params['id']
     User.updateOne({_id:userid},{$set:req.body}).then(()=>{
            res.status(201).send("User updated successfully !!!");
        }).catch((err)=>{
            res.status(401).send(err);
        })
        
    
    console.log(userid);
})

//delete user

app.delete("/users/:id", async(req,res)=>{
    try{
   const deleteUser = await User.findByIdAndDelete(req.params.id);
   return res.status(200).send("User deleted successfully")
    }catch(e){
        res.status(500).send(e);
    }
})


app.listen(PORT,()=>{
    console.log(`connection is setup at${port}`);
})
