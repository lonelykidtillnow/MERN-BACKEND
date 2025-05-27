const { PrismaClient } = require("@prisma/client")
const express=require("express")
const app=express()

//1.Custom Middleware
//Creating Middleware
const Middleware1=(req,res,next)=>{
    console.log("Middleware 1 Running")
    next()
    // console.log("Router Execute")
}
const Middleware2=(req,res,next)=>{
    console.log("Middleware 2 Running")
    next()
}
//Global Accesing Middleware
app.use(Middleware1)

//Separate Accessing
app.get("/xxx",Middleware2,(req,res)=>{
    res.send("Separate Accessing")
})


//2.Built-In Middleware
app.use(express.json())

//3.Third Party Middleware
const morgan=require("morgan")
app.use(morgan("dev"))

//Health Check
app.get("/",(req,res)=>{
    //1.data from frontend

    //2.db logic

    //3.data to frontend
    res.send("Hello")
})

const prisma=new PrismaClient();
//Fetch All Details
app.get("/user",async(req,res)=>{
    //1.data from frontend

    //2.db logic
    const data=await prisma.User.findMany()
    //3.data to frontend
    res.send(data);
})

//Fetch Details By ID
app.get("/user/:id",async(req,res)=>{
    //1.data from frontend
    const {id}=req.params
    //2.db logic
    const data=await prisma.User.findUnique({
        where:{
            user_id:parseInt(id)
        }
    })
    //3.data to frontend
    res.send(data)
})
app.listen(3000)