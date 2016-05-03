/**
 * Created by whistle ting on 2016/4/24.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    blogTitle:{
        type:String,
        required:true
    },
    blogContent:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('blogs', blogSchema);