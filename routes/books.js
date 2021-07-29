const express = require('express')
const router = express.Router()
const {Book} = require("../models/book")



router.get("/",async (req,res) => {

    const result = await Book.find().sort("author")
    res.send(result)
})

router.post('/' , async (req,res) => {
    let book = new Book({
        name:req.body.name,
        author:"Tolstoy",
        tags:["novel", "fantastic"],
        isPublished:false,
        category:"science"
    })

    book = await book.save();
    res.status(201).send(book)
})
router.get('/:id' , async (req, res) => {
    let book = await Book.findById(req.params.id)

    if(!book) res.status(404).send("Bunday Idli Kitob topilmadi")

    res.send(book)
})
router.delete('/:id' , async (req, res) => {
    let book = await Book.findByIdAndRemove(req.params.id)

    if(!book) return res.status(404).send("Bunday Idli Kitob topilmadi")

    res.send(book)
})

router.put("/:id", async(req,res) => {
    let book = await Book.findByIdAndUpdate(req.params.id , {name:req.body.name},{new:true})
    if(!book) return res.status(404).send("Bunday Idli Kitob topilmadi")

    res.send(book)
})



module.exports = router;

