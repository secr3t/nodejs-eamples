const Todo = require('./models/todo');



var todo = new Todo();
todo._id = 100;
todo.title = '연습';
todo.description = '';
todo.start_date = '2017/11/08';
todo.create_date = new Date();

todo.save(function(err) {
    if(err) throw err;
    console.log('저장완료');
});