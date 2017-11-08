var express = require('express'),
    path = require('path');

var app = express();

//app.set('views', '경로')는 뷰템플릿 파일이 위치한 디렉토리 경로를 설정한다.
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', '템플릿엔진 모듈이름')
app.set('view engine', 'ejs');

app.get('/list.do', function(req, res) {
    // res.render('뷰템플릿파일명', 모델객체);
    res.render('list', {
        type: "현재 재직중인 사원 리스트",
        employees: [{no: 100, name: '김유신', dept: '총무부'},
            {no: 110, name: '강감찬', dept: '경호부'},
            {no: 120, name: '이순신', dept: '비서실'},
            {no: 130, name: '김덕배', dept: '무기고'}]
    }
    );
});

app.listen(3000, function() {
    console.log('웹서버 시작');
})