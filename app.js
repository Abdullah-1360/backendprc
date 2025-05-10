const express= require('express');
const app=express();
const usermodel=require('./usermodel');     
app.use(express.json());
app.get('/hi',(req,res)=>{
    console.log('hello');
    res.send('hello');
});
app.post('/register',async(req,res)=>{

  let createduser=await usermodel.create(req.body.name,req.body.email,req.body.password); 
  res.send(createduser);
});
PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log('server running on port',PORT));