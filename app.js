const express= require('express');
const app=express();

const usermodel=require('./usermodel');     
app.use(express.json());
app.get('/hi',(req,res)=>{
    console.log('hello');
    res.send('hello');
});
app.get('/register',async(req,res)=>{
let {name,email,password}=req.body;
  let createduser=await usermodel.create(
    {
      name:name,
      email:email,
      password:password
    }
  ); 
  res.send(createduser);
});
PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log('server running on port',PORT));