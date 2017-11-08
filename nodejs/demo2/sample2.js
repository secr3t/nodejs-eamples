// express 모듈 가져오기
let express = require('express');

// express 객체 생성하기
var app = express();

// port 지정하기
app.set('port', 3000);

// 미들웨어 함수 등록하기
app.use(function(req, res, next) {
   console.log('첫번째 미들웨어 함수가 실행됨.')
    var  url = req.url;
   req['REQ_URL'] = url;
   next();
});

app.use(function(req, res, next) {
    console.log('두번째 미들웨어 함수가 실행됨.');
    next();
});

app.use(function(req, res, next) {
    console.log('세번째 미들웨어 함수가 실행됨.');
    next();
});

app.use(myMiddleWare(true));

// 사용자의 요청을 처리하는 미들웨서 함수 등록하기
app.get('/', function(req, res){
    console.log(req.REQ_URL);
    res.type("text/plain;charset=utf-8");
    res.status(200);
    res.send('hello, express');
});

// 에러처리용 미들웨어 함수 등록
app.use(function(err, req, res, next) {
    console.log("첫번째 에러처리용 미들웨어 함수 실행됨");
    console.log(err);
    next(err);
});

app.use(function(err, req, res, next) {
    console.log("두번째 에러처리용 미들웨어 함수 실행됨");
    res.type("text/plain;charset=utf-8");
    res.status(500);
    res.send("server error");
})

app.listen(3000, function() {
    console.log('웹 서버가 시작되었씁니다.');
});


// 미들웨어 함수를 반환하는 함수
function myMiddleWare(isShow) {
    return function(req, res, next) {
        console.log("네 번째 미들웨어 함수가 실행됨");
        if(isShow) {
            console.log("요청URL", req.url);
        }
        next();
    }
}