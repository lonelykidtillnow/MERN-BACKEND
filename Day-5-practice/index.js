const express=require("express");
const app=express();
//prismaclient import
const {PrismaClient} =require("@prisma/client")

app.get("/",(req,res)=>{
    //1.Data from Frontend

    //2.DB Logic

    //3.Data from Backend
    res.send("hello Student")
})

const prisma=new PrismaClient();
//All Student Details
app.get("/students",async(req,res)=>{
    //1.Data from Frontend

    //2.DB Logic
    const studentdetails=await prisma.dummy_Student.findMany();
    //3.Data from Backend
    res.send(studentdetails);
})

//One Student Details
app.get("/students/:id",async(req,res)=>{
    //1.Data from Frontend
    const {id}=req.params
    //2.DB Logic
    const particularstudent=await prisma.dummy_Student.findUnique({
        where:{
            rollno:parseInt(id)
        }
    })
    //3.Data from Backend
    res.send(particularstudent);
})

//Add Student Details
app.use(express.json())
app.post("/studentadd",async(req,res)=>{
    //1.Data from Frontend
    const data=req.body
    //2.DB Logic
    const addstudent=await prisma.dummy_Student.create({
        data:{
            rollno:data.rollno,
            name:data.name,
            age:data.age,
            gender:data.gender,
            emailid:data.emailid,
            phoneno:data.phoneno
        }
    })
    //3.Data from Backend
    res.send(addstudent)
})

//Update Or Change Student Details
app.put("/studentupdate",async(req,res)=>{
     //1.Data from Frontend
    const data=req.body
    //2.DB Logic
    const updatestudent=await prisma.dummy_Student.update({
       where:{
        rollno:parseInt(data.rollno)
       },
       data:{
            rollno:data.rollno,
            name:data.name,
            age:data.age,
            gender:data.gender,
            emailid:data.emailid,
            phoneno:data.phoneno
       }
    })
    //3.Data from Backend
    res.send(updatestudent)
})

//Delete Student Details
app.delete("/studentremove",async(req,res)=>{
     //1.Data from Frontend
    const data=req.body
    //2.DB Logic
    await prisma.dummy_Student.delete({
        where:{
            rollno:data.rollno
        }
    })
    //3.Data from Backend
    res.send("delete successfully")
})
app.listen(3000);