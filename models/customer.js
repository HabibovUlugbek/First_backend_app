const mongoose = require("mongoose")

const customerSchema  = new mongoose.Schema({
    name: {
        type:String , 
        required:true , 
        minlength: 5, 
        maxlength: 120},
    isVip:{
        type:Boolean,
        default:false
    },
    phone:{
        type: String,
        required:true,
        minlength:6,
        maxlength:15,
    }
    
})

const Customer = mongoose.model("Customer", customerSchema);

exports.Customer = Customer;
