const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
        required: true
    },
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
    }
})

const cartItem= mongoose.model('CartItems', cartItemSchema);
module.exports = cartItem;