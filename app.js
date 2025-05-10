const express= require('express');
const app=express();
app.use(express.json());
app.get('/hi',(req,res)=>{
    console.log('hello');
    res.send('hello');
});
PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log('server running on port',PORT));