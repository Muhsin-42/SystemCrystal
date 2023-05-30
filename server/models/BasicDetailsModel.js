const mongoose = require('mongoose');
const { Schema } = mongoose;

const BasicDetailsModelSchema = new Schema({
    phone1: {
        type: String,
    },
    phone2: {
        type: String,
    },
    email: {
        type:String,
    },
    addressurl:{
        type: String
    },
    address:{
        type: String
    }
},{timestamps:true});

const BasicDetailsModel = mongoose.model('basicDetails', BasicDetailsModelSchema);

module.exports = BasicDetailsModel;
