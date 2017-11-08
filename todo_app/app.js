const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();

// 뷰 템플릿 엔진
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 폼 입력값 처리
app.use(bodyParser.urlencoded({extended:false}));   // middleware

app.get('/home.do', function(req, res) {
    res.render('home');
});
app.get('/', function(req, res) {
    res.render('home');
});

app.use('/user', require('./routers/user'));
app.use('/todo', require('./routers/todo'));

app.listen(3000, function() {
    console.log('웹 서버 시작');
});