const mongoose = require("mongoose");
require("dotenv").config()
require("dotenv").config({ path: `.env.local`, override: true })
// const URL = "mongodb+srv://ermaanish:manish_singh@cluster0.u4btkwk.mongodb.net/?retryWrites=true&w=majority"
// const URL2 = "mongodb+srv://ermaanish:manish_singh@cluster0.5okciwd.mongodb.net/?retryWrites=true&w=majority" 

const LOCAL_URL="mongodb://127.0.0.1:27017/userdb"
mongoose.connect(process.env.MONGODB_URI,{
   // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log("No db connection");
    console.log(e);
})