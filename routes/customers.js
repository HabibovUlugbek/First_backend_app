const express = require('express')
const router = express.Router()
const {Customer} = require("../models/customer")


router.get("/",async (req,res) => {

    const customers = await Customer.find().sort("author")
    res.send(customers)
})

router.post('/' , async (req,res) => {
    let customer = new Customer({
        name:req.body.name,
        isVip:req.body.isVip,
        phone:req.body.phone,
         
    })

    customer = await customer.save();
    res.status(201).send(customer)
})
router.get('/:id' , async (req, res) => {
    let customer = await Customer.findById(req.params.id)

    if(!customer) res.status(404).send("Bunday Idli xaridor topilmadi")

    res.send(customer)
})
router.delete('/:id' , async (req, res) => {
    let customer = await Customer.findByIdAndRemove(req.params.id)

    if(!customer) return res.status(404).send("Bunday Idli xaridor topilmadi")

    res.send(customer)
})

router.put("/:id", async(req,res) => {
    let customer = await Customer.findByIdAndUpdate(req.params.id , {name:req.body.name},{new:true})
    if(!customer) return res.status(404).send("Bunday Idli xaridor topilmadi")

    res.send(customer)
})



module.exports = router;

