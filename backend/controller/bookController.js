const books=require('../models/bookSchema')
const Members=require('../models/userSchema')



//add book


exports.addBook=async(req,res)=>{

    const{bookId,title,author,price,isAssigned,assignedTo}=req.body;

    try {
        
      const newBook=await new books({
        bookId,
        title,
        author,
        price,
        isAssigned,
        assignedTo
        
      })
await newBook.save();

res.status(200).json(newBook)

    } catch (error) {
        res.status(400).json(error)
    }
}


//get all book

exports.getAllBook=async(req,res)=>{

    try {
        
        const newBook=await books.find()
        res.status(200).json(newBook)

    } catch (error) {
        res.status(400).json(error)
    }

}


//delete

exports.deleteBook=async(req,res)=>{
    const{id}=req.params

    try {
        
const removeBook=await books.findByIdAndDelete({_id:id})

res.status(200).json(removeBook)

    } catch (error) {
        res.status(404).json(error)
    }
}


//update

exports.updateBook=async (req,res)=>{
    const{id}=req.params;
    const{bookId,title,author,price,isAssigned,assignedTo}=req.body;

    try {
        
        const editBook=await books.findByIdAndUpdate(

          {_id:id},
          {bookId,title,author,price,isAssigned,assignedTo},
          {new:true}
        )
      await editBook.save();
      res.status(200).json(editBook)


    } catch (error) {
        res.status(401).json(error)
    }
}


//single book


exports.singleBook=async(req,res)=>{

    const{id}=req.params
    try {
        const getBook=await books.findById({_id:id})
        res.status(200).json(getBook) 
    } catch (error) {
        res.status(404).json(error)
    }
}










 