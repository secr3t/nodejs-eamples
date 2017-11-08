const express = require('express');

var router = express.Router();

router.get('/home.do', function(req, res) {
    res.render('todo/home');
});

router.get('/add.do', function(req, res) {
    res.render('todo/form');
});

module.exports = router;