const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    state: { type: String, required: true },
    mobile: { type: String, required: true },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

const address= mongoose.model('Addresses', addressSchema);
module.exports = address;