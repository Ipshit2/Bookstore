import {Book} from "../models/book.model.js"
import {asyncHandler} from "../asyncHandler.js"


//enter a book in database  
//http://localhost:8000/book/register
const enterbook = asyncHandler(async (req, res)=>{
    get details
    const {title, author, year} = req.body

    validate empty or not
    if (!title || !author|| !year) {
        return res.status(400).send({
            message: " All fields are required "
        })
    }
    const existedBook = await Book.findOne({title})
    if(existedBook){
        return res.status(409).send({
            message : " Book already exists "
        })
    }

    creating object
    const book = await Book.create({
        title,
        author,
        year,
         
    })

    check created successfull or not
    const entered = await Book.findById(book._id)
    if(!entered){
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
    else{
        return res.status(201).send({
            message: "Book is registered Successfully"
        })
    }
})


//get all books from database
//http://localhost:8000/book
const allbook = asyncHandler(async (req, res)=>{
    
    const books = await Book.find({})
    try {
        
        if(books){
            return res.status(200).send({
                message:" all books",
                count : books.length,
                data: books
            })
        }
    } catch (error) {     
        return res.status(500).send({
            message: "something went wrong in finding books"
        })
        
    }
})

//get one book by id
//http://localhost:8000/book/{id}
const onebook =asyncHandler(async(req,res)=>{
    const book = await Book.findById(req.params.id)
    try {
        if(!book){
            return res.status(500).send({
                message:"no such book exists"
            })
        }else{
            return res.status(200).send({
                message: "book",
                data: book
            })
        }
    } catch (error) {
        return res.status(500).send({
            message: "something went wrong in finding books"
        
    })
}
})

//update a book from database


//delete a book from database
//http://localhost:8000/book/{id}
const deletebook = asyncHandler(async(req, res)=>{
    try {
        const item =await Book.findByIdAndDelete(req.params.id)
        if(!item){
            return res.status(500).send({
                message: "No such book"
            })
        }
        else{
            return res.status(201).send({
                message: "Book is deleted"
            })

        }
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
})

export {
    enterbook,
    allbook,
    onebook,
    deletebook,
}