const express = require("express");
const dbConnect = require("./config/database");
 const app = express();
 require("dotenv").config();
app.use(express.json())
app.listen(process.env.port || 4000,()=>{
    console.log("App started successfully")
})

app.get("/", (req,res)=>{
res.send(`<h1>This is homepage</h1>`)
})

// importing database 
const db = dbConnect;
db();

const blog = require("./routes/blog")
// 
app.use('/api/v1',blog);