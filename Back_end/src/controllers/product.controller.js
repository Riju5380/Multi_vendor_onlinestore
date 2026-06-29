const product = require('../models/product.model');

// const createProduct = (async(req,res)=>{
//     const {name,price,category} = req.body;
//     const product = await product.create({name,price,category});
//     res.status(200).json({message:"Product created successfully"},product);
// })

const getAllProducts = (async(req,res)=>{
    const products = await product.find();
    res.status(200).json({products});
})

module.exports = {getAllProducts};