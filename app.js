const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config')
const bodyparser=require('body-parser')
const app=express();
const postroute=require('./routes/posts')

const DB=process.env.DB_data
app.use(bodyparser.json())
mongoose.connect(DB).then(()=>
{
    console.log('success')
}
).catch((err)=>{
    console.log(err)
})



app.use('/posts',postroute)

app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(4000)

