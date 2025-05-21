const express=require("express");
const { request } = require("http");

//create instance HTTP server
const app=express();

app.get("/",(req,res)=>{
    //1.Data from Frontend

    //2.DB logic

    //3.Data to FrontEnd
    res.send("hello");
})

app.get("/fuck",(req,res)=>{
    //1.Data from Frontend

    //2.DB logic

    //3.Data to FrontEnd
    res.send("Alison Tyler");
})
app.listen(3000);