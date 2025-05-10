const express= require('express');
const app=express();

app.get('/hi',(req,res)=>{
    console.log('hello');
    res.send('hello');
});

app.listen(3000);