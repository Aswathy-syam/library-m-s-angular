const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    memberId:{
        type:String,
        required:true,
        unique:true
        
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }

})

const users=mongoose.model('Member',userSchema)
module.exports=users