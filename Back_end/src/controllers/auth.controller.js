const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');

const register=(async(req,res)=>{
     const {name,email,password,mobile} = req.body;

     if(!name || !email || !password || !mobile){
            return  res.status(400).json({message:"All fields are required"});
     }

     const existinguser = await User.findOne({ email });
     if(existinguser){
        return res.status(400).json({message:"User already exists"});
     }
     
     const hpassword = await bcrypt.hash(password,8);
     const user = await User.create({name,email,password:hpassword,mobile});
     res.status(201).json({
        message:"Registration successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile
        }
     });
})

const login = (async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"Invalid email"});
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid password"});
    }
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({message:"JWT_SECRET is not configured"});
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    res.status(200).json({message:"Login successful", token});
})

const getallusers =(async(req,res)=>{
     const users = await User.find();
     res.status(200).json({users});
})

const getuserbyid =(async(req,res)=>{
     const {id} = req.params;
     const user = await User.findById(id);
     res.status(200).json({user});
})

module.exports = {register,login,getallusers,getuserbyid};
