const { PrismaClient } = require("@prisma/client");
const express=require("express")
const app=express()

//Health Check
app.get("/",(req,res)=>{
    //1.Data From Frontend

    //2.DB Logic

    //3.Data To Frontend
    res.send("hello");
})

//Fetch all product
const prisma=new PrismaClient()
app.get("/products",async(req,res)=>{
    try{
        //1.Data From Frontend

        //2.DB Logic
        const products=await prisma.Cart.findMany()
        //3.Data To Frontend
        res.status(200).json({message:"Product Details",data:products})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Fetch product by ID
app.get("/products/:product_id",async(req,res)=>{
    try{
        //1.Data From Frontend
        const {product_id}=req.params
        //2.DB Logic
        const productbyid=await prisma.Cart.findUnique({
            where:{
                id:parseInt(product_id)
            }
        })
        //3.Data To Frontend
        res.status(200).json({message:"Product Details By Id",data:productbyid})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Add Single Product
app.use(express.json())
app.post("/products/add",async(req,res)=>{
    try{
        //1.Data From Frontend
        const data=req.body
        //2.DB Logic
        const addproduct=await prisma.Cart.create({
            data:{
                id:data.id,
                imageurl:data.imageurl,
                name:data.name,
                price:data.price,
                quantity:data.quantity,
                discount:data.discount,
                total:data.total
            }
        })
        //3.Data To Frontend
        res.status(200).json({message:"Added Successfully",data:addproduct})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Add Multiple Product
app.post("/products/adds",async(req,res)=>{
    try{
        //1.Data From Frontend
        const data=req.body
        //2.DB Logic
        const addproducts=await prisma.Cart.createMany({
            data:data
        })
        //3.Data To Frontend
        res.status(200).json({message:"Added Successfully",data:addproducts})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Update Product
app.put("/products/update",async(req,res)=>{
    try{
        //1.Data From Frontend
        const data=req.body
        //2.DB Logic
        const updateproduct=await prisma.Cart.update({
            where:{
                id:parseInt(data.id)
            },
            data:{
                imageurl:data.imageurl,
                name:data.name,
                price:data.price,
                quantity:data.quantity,
                discount:data.discount,
                total:data.total   
            }
        })
        //3.Data To Frontend
        res.status(200).json({message:"Updated Successfully",data:updateproduct})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Delete Product
app.delete("/products/delete",async(req,res)=>{
    try{
         //1.Data From Frontend
        const data=req.body
        //2.DB Logic
        await prisma.Cart.delete({
            where:{
                id:parseInt(data.id)
            }
        })
        //3.Data To Frontend
        res.status(200).json({message:"Deleted Successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})
app.listen(3000)