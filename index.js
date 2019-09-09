const express = require("express")
const app = express()

app.get("/",(req,res)=>{
  res.send("Hello World!") 
})

app.get("/dragon",(req,res)=>{
  res.send("Enter the world of dragons!") 
})

app.get("/imagine",(req,res)=>{
  res.send("Imagine dragons!") 
})


app.listen(process.env.PORT||3000, ()=>{
    console.log("Application started running on Moon....")
})

module.exports = app