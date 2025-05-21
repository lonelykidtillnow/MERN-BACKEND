const express=require("express");
const app=express();
const {PrismaClient}=require("@prisma/client")

app.use(express.json());

app.get("/",(req,res)=>{
    //1.Data from Frontend
    
    //2.DB logic

    //3.Data To Frontend
    res.send("hello");
})

const prisma=new PrismaClient();
//Add Student Details
app.post("/studentadd",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body;
    //2.DB logic
    const newstudent=await prisma.student.create({
        data:{
            rollno:data.rollno,
            name:data.name,
            age:data.age,
            gender:data.gender,
            std:data.std,
            bloodgroup:data.bloodgroup
        }
    })
    //3.Data To Frontend
    res.send(newstudent);
})

//Update or change Student Details
app.put("/studentupdate",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body;
    //2.DB logic
    const updatestudent=await prisma.student.update({
        where:{
            rollno:parseInt(data.rollno)
        },
        data:{
            rollno:data.rollno,
            name:data.name,
            age:data.age,
            gender:data.gender,
            std:data.std,
            bloodgroup:data.bloodgroup
        }
    })
    //3.Data To Frontend
    res.send(updatestudent)
})

//Delete Student Details
app.delete("/studentdelete",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body;
    //2.DB logic
    await prisma.student.delete({
        where:{
            rollno:data.rollno
        }
    })
    //3.Data To Frontend
    res.send("Deleted Successfully")
})
app.listen(3000);