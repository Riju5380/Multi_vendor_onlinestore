const mongoose = require('mongoose');

const catagorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    parentCatagory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Catagories',
    },
})

const catagory= mongoose.model('Catagories', catagorySchema);
module.exports = catagory;