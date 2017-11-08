var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path');

var app = express();

// 정적컨텐츠(html, css, js, image)를 제공하는 미들웨어 함수 등록하기
// __dirname ==> nodeJS의 전역변수, 현재 실행되는 js파일이 위치한 전체경로가 담겨있음
var staticContentPath = path.join(__dirname, 'public');
app.use(serveStatic(staticContentPath));

app.listen(3000, function() {
    console.log('웹서버 시작');
});
