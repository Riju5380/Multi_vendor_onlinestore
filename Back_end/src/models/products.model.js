const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    discountPrice:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    imageurl:[{
        type: String,
    }],
    rating:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ratings',

    }],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews',
    }],
    createdAt:{
        type: Date,
        default: Date.now(),
    },
})

const product = mongoose.model('Products', productSchema);
module.exports = product;