const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookId:{
        type:String,
        required:true,
        unique:true
        
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    isAssigned:{
        type:Boolean,
        required:true

    },
   
    assignedTo: { 
        type:String,
        default: null
    },
        

})



const books=mongoose.model('books',bookSchema)
module.exports=books