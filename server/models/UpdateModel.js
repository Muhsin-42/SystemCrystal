const mongoose = require('mongoose');
const { Schema } = mongoose;

const UpdatesSchema = new Schema({
    content: {
        type: String,
        require:false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    image: {
        type: String,
        required: false
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

const PostsModel = mongoose.model('updates', UpdatesSchema);

module.exports = PostsModel;
