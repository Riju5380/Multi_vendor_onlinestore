const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const rating = mongoose.model('Ratings', ratingSchema);
module.exports = rating;