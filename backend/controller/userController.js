const Member=require('../models/userSchema')



//add


exports.addUser=async(req,res)=>{

  const{memberId, name, email}=req.body
  

  try {
    
    const preUser=await Member.findOne({email});
    if(preUser){
        res.status(400).json('user already exist')
    }

    else{
        const newUser=new Member({
            memberId,
            name,
            email
        })
        await newUser.save()
        res.status(200).json(newUser)
    }



  } catch (error) {
    res.status(401).json(error)
  }
}


// get user

exports.getUser=async(req,res)=>{
   try {
    
    const user=await Member.find()
    res.status(200).json(user)


   } catch (error) {
    res.status(404).json(error)
   }
}

//delete

exports.deleteUser=async(req,res)=>{

const{id}=req.params

try {

    const removeUser=await Member.findByIdAndDelete({_id:id})
    res.status(200).json(removeUser)


} catch (error) {
    res.status(404).json(error)
}


}

//update

exports.updateUser=async(req,res)=>{

    const{id}=req.params

    const{memberId,name,email}=req.body

    try {
        
const editUser=await Member.findByIdAndUpdate(
    {_id:id},
    {memberId,name,email},
    {new:true}
)

await editUser.save()
res.status(200).json(editUser)



    } catch (error) {
        res.status(401).json(error)
    }
}


//get single user

exports.getsingleUser=async(req,res)=>{
    const{id}=req.params
    try {
     
     const user=await Member.findOne({_id:id})
     
     
     res.status(200).json(user)
 
 
    } catch (error) {
     res.status(404).json(error)
    }
 }



