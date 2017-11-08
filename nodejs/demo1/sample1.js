/* 	nodejs 전역객체
	console 객체
		- .log(메세지) : 메세지 출력
		- .dir(객체) : 객체의 속성등을 출력
		- .time("id"), .timeEnd("id") : 실행시간을 측정해서 출력한다.
	exports 객체(모듈을 다루는 객체), process 객체, 

*/
console.time("t1");
console.log('hello world');
console.timeEnd("t1");