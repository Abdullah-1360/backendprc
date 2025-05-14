const express= require('express');
const app=express();
const bcrypt = require('bcrypt');
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

const usermodel=require('./usermodel');     
app.use(express.json());
app.get('/hi',(req,res)=>{
    console.log('hello');
    res.send('hello');
});

app.post('/register',async(req,res)=>{
let {name,email,password}=req.body;
await usermodel.findOne({email:email}).then((user)=>{
  if(user){
    res.send('user already exist').status(500);
    return
  }
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,async (err,hash)=>{
      password=hash;
      let createduser=await usermodel.create(
    {
      name:name,
      email:email,
      password:password
    }
  ); 
    })
  })
})
  
  res.send(createduser);
});
PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log('server running on port',PORT));