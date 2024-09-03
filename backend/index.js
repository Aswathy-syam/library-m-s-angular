
require('dotenv').config()

require('./db/connection')
// const bodyParser = require('body-parser');

const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')


const app=express()
app.use(cors())
// app.use(bodyParser.json());

app.use(express.json())
app.use(router)




const PORT=4000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log("port connected")
})