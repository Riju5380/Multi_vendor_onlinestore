const catagory = require('../models/catagory.model');

const createCategory = (async(req,res)=>{
    const {name} = req.body;
    const category = await catagory.create({name});
    res.status(200).json({message:"Category created successfully"},category);
})

const getAllCategories = (async(req,res)=>{
    const categories = await catagory.find();
    res.status(200).json({categories});
})

module.exports = {createCategory,getAllCategories};