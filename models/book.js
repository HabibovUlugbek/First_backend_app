const mongoose = require("mongoose")

const bookSchema  = new mongoose.Schema({
    name: {type:String , required:true , minlength: 4, maxlength: 10},
    author:String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(val,callback) {
                setTimeout(() => {
                    const result = val && val.length >1;
                    callback(result);
                }, 50);
                
            },
            message:"Kitobning kamida 2 tegi bo`lishi kerak"
        }
    },
    date: {type:Date, default: Date.now},
    isPublished: Boolean,
    price:{
        type :Number,
        required: function () {
            return this.isPublished ;
        },
        get: val => Math.round(val),
        set: val => Math.round(val)
    },
    category:{
        type: String,
        required:true,
        enum: ["classic", "science"],
        lowercase: true,
        trim: true
    }
})

const Book = mongoose.model("Book", bookSchema);

exports.Book = Book;