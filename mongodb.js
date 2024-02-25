const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/resturant")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("error");
})

const regschema=new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    price:{
    type:Number,
    required:true
    },

})
const collection=new mongoose.model("menu",regschema)
module.exports=collection;