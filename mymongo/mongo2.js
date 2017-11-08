const mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost/hta";

mongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log('db에 연결됨');

    db.collection('users').find({age:{$gt:50}}).toArray(function(err, result) {
        if(err) throw err;
        console.log('조회성공');
        console.log(result);

        db.close();
    })

/*    db.collection('users').findOne({_id:200}, function(err, result){
        if(err) throw err;
        console.log('조회성공');
        console.log(result);

        db.close();
    })*/
})