let express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

// express 앱객ㅊ 만들기

var app = express();

// 뷰템플릿 경로 설정하기
app.set('views', path.join(__dirname, 'view_templates'));
// 뷰템플릿 엔진 지정하기
app.set('view engine', 'ejs');

// 미들웨어 함수 등록하기
// 로거출력 미들웨어, 정적컨텐츠제공 미들웨어, 폼입력값처리 미들웨어,
// 404에러처리 미들웨어, 500에러처리 미들웨어 등을 등록한ㄷ.

// 로거 설정하기
app.use(logger('dev'));

// 폼입력값처리 미들웨어함수 설정하기
// enctype이 "application/x-www-form-urlencoded"형식의 폼데이터 처리
// title=연습&writer=홍길동&message=안녕하세요 와 같은 형식의 폼입력값을
// req.body = {title : "연습", writer : "홍길동", message : "안녕하세요"}
// 와 같은 형태로 담는다.
app.use(bodyParser.urlencoded({extended:false}));

// 방명록을 저장하는 배열 정의하기
var entries = [];

// url 라우팅
// 요청url과 요청핸들러 미들웨어함수를 매핑시킨다.
app.get('/home.do', function(req, res) {
    res.render('home', {guestbooks:entries});
});

app.get('/add.do', function(req, res) {
    res.render('form');
});

app.post('/add.do', function(req, res) {

    var titleVal = req.body.title;
    var writerVal = req.body.writer;
    var messagesVal = req.body.messages;
    console.log(titleVal, writerVal, messagesVal);

    entries.push({
        title:titleVal,
        writer:writerVal,
        messages:messagesVal,
        published:new Date()
    });

    res.redirect('home.do');
});

app.get('/del.do', function(req, res) {
    var index = req.query.index;
    console.log(index);
    entries.splice(index, 1);
    res.redirect('home.do');
})

/*404 에러처리
* url 라우팅에서 나열된 url과 요청url이 일치하지 않을 때 실행된다.
* 항상 url라우팅 설정의 맨 끝에 설정한다.
* */
app.use(function(req, req) {
    res.render('404err');
});

app.use(function(err, req, res, next) {
    res.render('500err');
})

app.listen(3000, function() {
    console.log('웹서버 시작');
});