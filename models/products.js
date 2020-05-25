const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        required:[true, 'Please add the prodcut name']
    },
    price:{
        type:Number,
        trim: true,
        required:[true, 'Please add the Pridcut price']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)