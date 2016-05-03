/**
 * Created by whistle ting on 2016/4/21.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('users', userSchema);