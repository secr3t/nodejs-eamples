const mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/hta';

mongoClient.connect(url, function(err, db) {
    if(err) throw err;
/*
    db.collection('users').updateOne({_id:200}, {name:"스콰스키", email:"seukwaski@jhta.co.kr"}, function(err, result) {
        if(err) throw err;
        console.log('문서 업데이트');

        console.log(result);

        db.close();
    });*/
    db.collection('users').updateOne({_id:200}, {$set: {email:"스꽈@jhta.co.kr"}}, function(err, result) {
        if(err) throw err;
        console.log('문서 업데이트');

        console.log('수정된 문서의 갯수', result.modifiedCount);

        db.close();
    });
})