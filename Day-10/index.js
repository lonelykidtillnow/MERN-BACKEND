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
app.use(express.json())
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

    //creating schema to check valid id or not
    const idschema = z.object({
        id: z.coerce.number()
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
app.listen(3000)