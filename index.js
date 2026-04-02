import express from 'express';
import database from './configs/database.js';
import router from './routers/index.js';
const app=express();
const port=3200;
app.use(express.json());
app.use('/api',router)
app.listen(port,(error)=>{
    if(error){
        console.log({error:error.message})
    }
    else{
        console.log("server start..")
        console.log('http://localhost:'+port)
    }
})