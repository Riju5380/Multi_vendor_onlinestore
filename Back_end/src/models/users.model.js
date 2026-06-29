const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Addresses'
    }],
    payments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment_information'
    }],
    ratings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    createdAt: { 
        type: Date,
        default: Date.now
    }
}, 
{ timestamps: true });

const User = mongoose.model('Users', userSchema);

module.exports = User;