const mongoose=require('mongoose')

const todoschema=new mongoose.Schema({
    task:{type:String,required:true},
    desc:{type:String},
    date1:{type:Date},
    date:{type:String},
    category:{type:String},
    active:{type:Boolean}
})
const todoModel=mongoose.model("todos",todoschema);

module.exports=todoModel