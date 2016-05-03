var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Blog = require('../models/blogs');
var db = require('../config/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'whistle.ting blog' });
});

router.get('/register', function(req, res, next){
  res.render('register');
});

router.get('/login', function(req, res, next){
  res.render('login');
});

router.get('/homepage', function(req, res, next){
  Blog.find({}, function(err, blogPosts){
    if (!err) {
      res.render('homepage', {
        blogPosts: blogPosts
      });
    } else {
      res.status(500);
      res.render('500', {
        err: err,
        url: req.url
      });
    }
  });
});

router.get("/create",function(req,res) {
  // req.session.user = null;
  res.render('create');
});

router.get("/logout",function(req,res) {
  // req.session.user = null;
  res.redirect('/');
});


router.get('/blog/:title/?', function(req, res, next) {
  var title = req.params.title;

  Blog.findOne({blogTitle:title},function(err, blog){
    if(err){
      console.log('fail');
    }else{
      res.render('detail', {
        blog : blog
      });
    }
  });
});

router.post("/create",function(req,res) {
  Blog.create({"blogContent":req.body.content, "blogTitle":req.body.title, "email":"admin@admin.com", 'date': new Date()},function(err){
    if(err){
      console.log('fail');
    }else{
      console.log('register success');
      res.redirect('/homepage');
    }
  });
});

router.post("/login",function(req,res) {
  // var md5 = crypto.createHash('md5');
  // var password = md5.update(req.body.password).digest('base64');

  User.findOne({email:req.body.email}, function(err, user) {
    if (!user) {
      console.log('user not exits!');
      return res.redirect('/login');
    }
    if (user.password != req.body.password) {
      console.log('password incorrect!');
      return res.redirect('/login');
    }
    res.redirect('/homepage');
    console.log('success login');
  });
});

router.post("/register",function(req,res) {
  // var md5 = crypto.createHash('md5');
  // var password = md5.update(req.body.password).digest('base64');

  User.findOne({email:req.body.email}, function(err, user) {
    if (user) {
      console.log('has registed');
      return res.redirect('/register');
    }else{
      User.create({"username":req.body.username, "password":req.body.password, "email":req.body.email},function(err){
        if(err){
          console.log('fail');
        }else{
          console.log('register success');
          res.redirect('/login');
        }
      });
    }
  });
});
module.exports = router;
