const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItems',
    }],
    orderDate:{
        type: Date,
        default: Date.now(),
        required: true
    },
    deliveryDate:{
        type: Date,
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Addresses',
    },
    paymentDetails:{
        
        paymentMethod:{ 
           type: String,
        },
        paymentStatus:{ 
              type: String,
              default: 'Pending',
        },
        transactionId:{
                type: String,
        },
        paymentId:{
                type: String,
        },
    },
    totalPrice:{
        type: Number,
        required: true,
    },
    totalDiscountedPrice:{
        type: Number,
        required: true,
    },
    discounte:{
        type: Number,
        required: true,
    },
    orderStatus:{
        type: String,
        default: 'Processing',
    },
    totalItem:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }

})

const order = mongoose.model('Orders', orderSchema);
module.exports = order;