const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //1.Data from Frontend

    //2.DB logic

    //3.Data to Frontend
    res.status(200).json({ message: "Restaurant List" })
})

//All Restaurants Details
const prisma = new PrismaClient();
app.get("/restaurants", async (req, res) => {
    try {
        //1.Data from Frontend

        //2.DB logic
        const restaurantlist = await prisma.restaurants.findMany()

        //3.Data to Frontend
        res.status(200).json({ message: "Restaurants List", data: restaurantlist })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

//Particular Restaurant Details
app.get("/restaurant/:id",async(req,res)=>{
    try{
        //1.Data from Frontend
        const {id}=req.params
        //2.DB logic
        const restaurantdetails=await prisma.restaurants.findUnique({
            where:{
                restaurants_id:id
            }
        })
        //3.Data to Frontend
        res.status(200).json({message:"Restaurant Details",data:restaurantdetails})
    }
    catch(error){
        res.status(400).send(error)
    }
})

//Add Restaurants Details
app.use(express.json())
app.post("/restaurant/add",async(req,res)=>{
    try{
        //1.Data from Frontend
        const data=req.body
        //2.DB logic
        const restaurantadd=await prisma.restaurants.create({
            data:{
                restaurants_id:data.restaurants_id,
                restaurant_name:data.restaurant_name,
                imageurl:data.imageurl,   
                location:data.location,     
                offer:data.offer
            }     
        })
        //3.Data to Frontend
        res.status(200).json({message:"Added Suucessfully",data:restaurantadd})
    }
    catch(error){
        res.status(400).send(error)
    }
})

//Update Restaurant Details
app.put("/restaurant/update",async(req,res)=>{
    try{
        //1.Data from Frontend
        const data=req.body
        //2.DB logic
        const restaurantupdate=await prisma.restaurants.update({
            where:{
                restaurants_id:data.restaurants_id,
            },
            data:{
                restaurants_id:data.restaurants_id,
                restaurant_name:data.restaurant_name,
                imageurl:data.imageurl,
                location:data.location,
                offer:data.offer
            }
        })
        //3.Data to Frontend
        res.status(200).json({message:"Updated Successfully",data:restaurantupdate})
    }
    catch(error){
        res.status(400).send(error)
    }
})

//Delete Restaurant Details
app.delete("/restaurant/delete",async(req,res)=>{
    try{
        //1.Data from Frontend
        const data=req.body
        //2.DB logic
        await prisma.restaurants.delete({
            where:{
                restaurants_id:data.restaurants_id
            }
        })
        //3.Data to Frontend
        res.status(200).json({message:"Deleted Successfully"})
    }
    catch(error){
        res.status(400).send(error)
    }
})
app.listen(3000)