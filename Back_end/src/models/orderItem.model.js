const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        requited: true
    },
    size:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    },
    price:{
        type: Number,
        required: true
    },
    addedAt:{
        type: Date,
        default: Date.now()
    },
    discountedPrice:{
        type: Number,
        required: true
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
})

const orderItem= mongoose.model('OrderItems', orderItemSchema);
module.exports = orderItem;