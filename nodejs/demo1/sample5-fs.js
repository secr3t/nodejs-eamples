// fs모듈 = 파일을 다루는 모듈, nodejs 내장모듈
// .readFile(filename, [encoding], [callback])
// .writeFile(filename, data, [encoding], [callback])

var fs = require('fs');

// 파일 기록하기

/*
fs.writeFile("./output/sample.txt", '안녕하세요222', 'utf-8', function(err){
    if(err){
        console.log('파일 쓰기 도중 에러 발생', err);
        return;
    }
    console.log('파일 작성완료');
});
*/

// 파일 읽기
fs.readFile("./output/sample.txt", 'utf-8', function(err, data){
    if(err){
        console.log('파일 읽기 도중 에러 발생', err);
        return;
    }
    console.log(data);
})