// 노드의 내장모듈 http 모듈을 가져오기
var http = require('http');

// HTTP 요청/응답을 처리하는 웹 서버 생성하기
// req는 요청객체, res는 응답객체다.
// 서버는 클라이언트의 요청이 접수되면 요청객체와 응답객체를 생성해서
// 필요한 정보를 모두 저장한 후
// 사용자가 구현해놓은 콜백함수 실행시 전달한다.

var users = ["김유신", "홍길동", "강감찬", "이순신"];


var server = http.createServer(function(req, res) {
    console.log('url --', req.url);
    console.log('method', req.method);
    // res.writeHead(응답코드, 헤더정보);
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // res.write(응답컨텐츠);
    res.write('<html>');
    res.write('<head>');
    res.write('<meta charset="utf-8">');
    res.write('<title>nodeJS 웹</title>');
    res.write('<body>');
    res.write('<h1>사용자 리스트</h1>');
    res.write('<ul>');
    users.forEach(function(item, index) {
        res.write('<li>'+item+'</li>');
    });
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    // res.end()가 실행되면 응답컨텐츠가 클라이언트로 전송되기 시작한다.
    res.end();
});
// HTTP 요청/응답을 처리하는 웹 서버가 사용할 port 지정하기
server.listen(3000);
