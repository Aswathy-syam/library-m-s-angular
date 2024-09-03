const express=require('express')
const { addUser, getUser, deleteUser, updateUser, getsingleUser} = require('../controller/userController')
const { addBook, getAllBook, deleteBook, updateBook, singleBook } = require('../controller/bookController')



const router=new express.Router()

//member

router.post('/add',addUser)
router.get('/get',getUser)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateUser)
router.get('/single-user/:id',getsingleUser)


// books

router.post('/add-book',addBook)
router.get('/getAll-book',getAllBook)
router.delete('/delete-book/:id',deleteBook)
router.put('/update-book/:id',updateBook)
router.get('/single-book/:id',singleBook)








module.exports=router