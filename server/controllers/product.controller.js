console.log("product.controller.js");
const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        msg: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (req, res) => {
    const { title, price, desc } = req.body;
    //const newproduct = new Product(req.body);
    Product.create({
        title,
        price,
        desc
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
module.exports.allProducts = (req,res)=>{
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err));
}
module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(prod => res.json(prod))
        .catch(err => res.json(err))
}
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(upprod => res.json(upprod))
        .catch(err => res.json(err))
}
module.exports.deleteProduct = (req, res) => {
    console.log(req.params);
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.json({msg: "ok deleted"}))
        .catch(err => response.json(err))
}



