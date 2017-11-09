const express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    path = require('path');

var app = express();

// 뷰 템플릿 엔진
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 폼 입력값 처리
app.use(bodyParser.urlencoded({extended:false}));   // middleware

app.use(expressSession({
    secret:'ASDFASDFASDF',              // 암호화 키
    resave:false,           // 세션의 내용이 변경될 때만 세션이 재저장되도록 설정한다.
    saveUninitialized:true  // 세션이 저장되기 전에 세션의 상태를
}))

app.use(function(req, res, next) {
    if(req.session['LOGIN_USER']){
        res.locals['logined'] = true;
    } else {
        res.locals['logined'] = false;
    }
    next();
})

app.use(function(req, res, next) {
    console.log(req.session);

    next();
})

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