console.log("product.model.js");
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "REQUIRED"],
        minlength: [3, "Must be 3 characters long"]
    },
    price: { 
        type: Number,
        required: [true, "REQUIRED"],
        min : [0, "Product price must be a positive number"]
    },
    desc: { 
        type: String,
        required: [true, "REQUIRED"],
        min : [5, "Product description must be at least 5 characters long"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);
