const { PrismaClient } = require("@prisma/client")
const bcrypt=require("bcrypt")
const { error } = require("console")
const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    //1.Data from Frontend

    //2.DB Logic

    //3.Data to Frontend
    res.send("Hello")
})

const prisma = new PrismaClient()
app.use(express.json())

//Register Normal User - Show password
app.post("/register",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body
    //2.DB Logic

    //Check user already have account
    const userexist=await prisma.Dummy_user.findUnique({
        where:{
            emailid:data.emailid
        }
    })
    if(userexist){
        //3.Data to Frontend
        res.status(400).json({message:"Email ID Already Exist,Go to Login"})
    }
    else{
        const newuser=await prisma.Dummy_user.create({
            data:{
                 user_name:data.user_name,
                 emailid:data.emailid,
                 password:data.password,
                 phoneno:data.phoneno
            }
        })
        //3.Data to Frontend
        res.status(200).json({message:"Register Successfully",data:newuser})
    }
})

//Register Celebrity User - Hide password using bcrypt()
app.post("/celbsregister",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body
    //2.DB Logic

    //Check user already have account
    const userexist=await prisma.Dummy_user.findUnique({
        where:{
            emailid:data.emailid
        }
    })
    if(userexist){
        //3.Data to Frontend
        res.status(400).json({message:"Email ID Already Exist,Go to Login"})
    }
    else{
        const hidepassword=await bcrypt.hash(data.password,10)
        const newuser=await prisma.Dummy_user.create({
            data:{
                 user_name:data.user_name,
                 emailid:data.emailid,
                 password:hidepassword,
                 phoneno:data.phoneno
            }
        })
        //3.Data to Frontend
        res.status(200).json({message:"Register Successfully",data:newuser})
    }
})

//Login Normal User - Show password
app.post("/login",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body
    //2.DB Logic

    //Check New User or not
    const newuser=await prisma.Dummy_user.findUnique({
        where:{
            emailid:data.emailid
        }
    })
    if(newuser){
        if(newuser.password===data.password){
            //3.Data to Frontend
            res.status(200).json({message:"Welcome",data:newuser})
        }
        else{
            //3.Data to Frontend
            res.status(400).json({message:"Emaild Id Right,Password is Wrong"})
        }
    }
    else{
        //3.Data to Frontend
        res.status(400).json({message:"Emaild Not Found, Please Go to Register"})
    }
})

//Login Celebrity User - Hide password using bcrypt()
app.post("/celbslogin",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body
    //2.DB Logic

    //Check New User or not
    const newuser=await prisma.Dummy_user.findUnique({
        where:{
            emailid:data.emailid
        }
    })
    if(newuser){
        bcrypt.compare(data.password,newuser.password, function(err, result) {
            if(result){
                //3.Data to Frontend
                res.status(200).json({message:"Welcome",data:newuser})
            }
            else{
                //3.Data to Frontend
                res.status(400).json({message:"Emaild Id Right,Password is Wrong"})
            }
        });
    }
    else{
        //3.Data to Frontend
        res.status(400).json({message:"Emaild Not Found, Please Go to Register"})
    }
})

app.listen(3000)