const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    cartItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cartItems',
        required: true
    }],
    totalPrice:{
        type: Number,
        required: true,
        default: 0
    },
    totalItems:{
        type: Number,
        required: true,
        default: 0
    },
    discount:{
        type: Number,
        required: true,
        default: 0
    },
    totaldiscountedPrice:{
        type: Number,
        required: true,
        default: 0
    }
})

const cart= mongoose.model('Carts', cartSchema);
module.exports = cart;