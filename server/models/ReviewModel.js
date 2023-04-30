const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    rating: {
        type: String,
        required: true,
    },
    reviewMessage: {
        type: String,
        required: true,
    }
},{timestamps:true});

const ReviewModel = mongoose.model('reviews', ReviewSchema);

module.exports = ReviewModel;
