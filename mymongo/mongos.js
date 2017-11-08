// mongoClient 객체 획득
let mongoClient = require('mongodb').MongoClient;

// mongodb 서버의 hta데이터베이스 연결 UTL
var url = "mongodb://localhost:27017/hta";

// mongodb와 연결하기
mongoClient.connect(url, function(err, db) {
    if(err) throw err;

    console.log('몽고db에 연결됨');

    var user = [{_id:200, name:"앙길동", email:"ang@gmail.com",pwd:"zxcv1234", age:400},
                {_id:300, name:"고길동", email:"go@gmail.com",pwd:"zxcv1234", age:400},
                {_id:400, name:"조길동", email:"jo@gmail.com",pwd:"zxcv1234", age:400}];

    db.collection("users").insertMany(user, function(err, result) {
        if(err) throw err;
        console.log("사용자정보가 저장됨");
        console.log(result);
        db.close();
    })
})