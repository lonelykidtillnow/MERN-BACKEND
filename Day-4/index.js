const { PrismaClient } = require("@prisma/client");
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    //1.Data from Frontend

    //2.DB logic

    //3.Data to Frontend
    res.send("hello fucker")
})

const prisma=new PrismaClient();
//All student Details
app.get("/students",async(req,res)=>{
    //1.Data from Frontend

    //2.DB logic
    const data=await prisma.student.findMany()
    //3.Data to Frontend
    res.send(data);
})

//Particular Student Details
app.get("/students/:id",async(req,res)=>{
    //1.Data from Frontend
    const {id}=req.params
    //2.DB logic
    const data=await prisma.student.findUnique({
        where:{
            rollno:parseInt(id),
        },
    })
    //3.Data to Frontend
    res.send(data);
})
app.listen(3000);