/**
 * Created by whistle ting on 2016/4/25.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/myapp');
module.export = db;
