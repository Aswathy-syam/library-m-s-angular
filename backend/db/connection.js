const mongoose=require('mongoose')
 

const connectionString=process.env.DATABASE_URL

mongoose.connect(connectionString).then(()=>{
    console.log("successfully connected");
})
.catch((err)=>{
    console.log(err);
})