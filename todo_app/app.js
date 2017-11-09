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

// 요청 url과 매핑되는 미들웨어 함수 등록 및 url라우팅

app.get('/home.do', function(req, res) {
    res.render('home');
});
app.get('/', function(req, res) {
    res.render('home');
});

app.use('/user', require('./routers/user'));
app.use('/todo', require('./routers/todo'));

// 404 에러 처리
app.use(function(req, res) {
    res.status(404);
    res.render('error/404page');
})
// 500 에러 처리
app.use(function(err, req, res, next) {
    res.status(500);
    res.render('error/500page', {error : err});
})

app.listen(3000, function() {
    console.log('웹 서버 시작');
});