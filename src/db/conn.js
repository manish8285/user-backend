const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/userdb",{
   // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log("No db connection");
})