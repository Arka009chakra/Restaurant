const express = require("express");
var cors=require("cors");
const app = express();
const m = require("./mongodb");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.post("/menu",async(req,res)=>{
const data ={
    name:req.body.name,
    price:req.body.price
}
await m.create({
    name:data.name,
    price:data.price
})
res.send({status:"ok"});
})

app.get("/getdata",async(req,res)=>{
    const result = await m.find();
    if(result){
        res.send(result)
    }
    res.send({status:"ok"});
})
app.listen(5500);
