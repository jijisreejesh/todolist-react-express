require("dotenv").config();
const express=require("express")
const app=express();
const PORT=process.env.PORT || 5000

const cors=require('cors')
app.use(express.json())
app.use(cors());

const router=require('./routes/routertodo')
app.use('/todos',router)

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/tododetails'
)
.then((res)=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.log('Databse connection error');
    
})


app.listen(PORT,()=>{
    console.log("Server running on port : ",PORT);
    
})