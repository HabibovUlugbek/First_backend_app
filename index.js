const express = require('express')
const app = express();
const booksRoute = require("./routes/books")
const customersRoute = require("./routes/customers")


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => {
        console.log("MongoDBga ulanamiz")
    })
    .catch(err => {
        console.error('MongoDBga ulanishda xato ro`y berdi', err)
    })
mongoose.set('useFindAndModify', false)
app.use(express.json())
app.use('/books', booksRoute)
app.use('/customers', customersRoute)

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server has been ${PORT}`)
})

app.get("/", (req,res) => {
    res.send("Salom ilk Backend dasturimizga xush kelibsiz")
})


