const express = require("express")
const app = express()
const { PrismaClient } = require("@prisma/client")

app.get("/", (req, res) => {
    //1.Data from Frontend

    //2.DB Logic

    //3.Data to Frontend
    res.send("hello")
})
app.use(express.json())
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

app.post("/login", async (req, res) => {
    //1.Data from Frontend
    const data= req.body
    //2.DB Logic
    const userexist = await prisma.user.findUnique({
        where: {
            email_id:data.email_id
        }
    })
    if (userexist) {
        bcrypt.compare(data.password,userexist.password, function(err, result) {
            if(result){
                res.json({message:"Welcome",data:userexist})
            }
            else{
            res.json({message:"Email Id Right, Password is wrong"})
            }
        });
    }
    else {
        res.json({ message: "User Doesn't Exist, Please Register" })
    }
    //3.Data to Frontend
})

app.listen(3000)