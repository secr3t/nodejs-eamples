const express = require('express'),
    UserModel = require('../models/usermodel');

// controller 역할
var router = express.Router();

router.get('/login.do', function(req, res) {
    res.render('user/loginform');
});

router.post('/register.do', function(req, res) {
    var name = req.body.username;
    var phone = req.body.userphone;
    var id = req.body.userid;
    var pwd = req.body.userpwd;

    console.log('폼입력값 : ', name, phone, id, pwd);

    var userModel = new UserModel();
    user._id = 1;
    user.name = name;
    user.userid = id;
    user.userpwd = pwd;
    user.phone = phone;

    res.redirect('/home.do');
})

router.get('/register.do', function(req, res) {
    res.render('user/form');
});



module.exports = router;