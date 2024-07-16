require("dotenv").config();
const mongoose  = require("mongoose");
const dbconnect = () => {
    mongoose.connect(process.env.url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch((error)=>{
        console.log("error while connecting")
        process.exit(1);
    })
}
module.exports = dbconnect;