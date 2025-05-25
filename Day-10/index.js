const { PrismaClient } = require("@prisma/client")
const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    //1.Data From Frontend

    //2.DB Logic

    //3.Data TO Frontend
    res.send("hello")
})

const prisma=new PrismaClient()
app.get("/students",async(req,res)=>{
    //1.Data From Frontend

    //2.DB Logic
    const details=await prisma.Students.findMany()
    //3.Data TO Frontend
    res.status(200).json({message:"Students Detail List",data:details})
})

//Validating Client Request using zod
const {z}=require("zod")
app.get("/students/:id",async(req,res)=>{

    //creating schema For Checking valid id or not
    const idschema = z.object({
        id: z.string()
    });

    //1.Data From Frontend
    const {id}=idschema.parse(req.params)
    //2.DB Logic
    const details=await prisma.Students.findUnique({
        where:{
            roll_no:parseInt(id)
        }
    })
    //3.Data TO Frontend
    res.status(200).json({message:"Students Detail List",data:details})
})

app.use(express.json())
app.post("/studentadd",async(req,res)=>{

    //Creating schema For Checking, Request is Valid or not
    const createschema = z.object({
        roll_no:z.number(),
        name:z.string(),
        age:z.number(),
        gender:z.string(),
        dob:z.string(),
        bloodgroup:z.string()
    });

    //1.Data From Frontend
    const data=createschema.parse(req.body)
    //2.DB Logic
    const details=await prisma.Students.create({
        data:{
            roll_no:parseInt(data.roll_no),
            name:data.name,
            age:parseInt(data.age),
            gender:data.gender,
            dob:data.dob,
            bloodgroup:data.bloodgroup
        }
    })
    //3.Data TO Frontend
    res.status(200).json({message:"Created Successfully",data:details})
})
app.listen(3000)