const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //1.Data from frontend

    //2.DB logic

    //3.Data to frontend
    res.send("hello");
})

const prisma = new PrismaClient()
app.use(express.json())
const bcrypt=require("bcrypt")

app.post("/register", async (req, res) => {
    try {
        //1.Data from frontend
        const data = req.body
        //2.DB logic
        const userexist = await prisma.User.findUnique({
            where: {
                email_id: data.email_id
            }
        })
        if (userexist) {
            res.json({ message: "User Already Exitsed" })
        }
        else {
            //Hidding Password From Developer using bcrypt
            const hiddenpassword=await bcrypt.hash(data.password,10);
            var newuser = await prisma.User.create({
                data: {
                    email_id: data.email_id,
                    password: hiddenpassword,
                    phoneno:data.phoneno
                }
            })
        }
        //3.Data to frontend
        console.log(newuser)
        res.status(200).json({message:"Register Successfully",data:newuser})
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
app.listen(3000)