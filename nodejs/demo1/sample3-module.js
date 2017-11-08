// 사용자정의 모듈 작성하기 
// exports 내장객체를 사용해서 사용자정의 모듈을 만든다.
// exports 내장객체에 사용자가 구현한 재사용가능한 기능을 담으면
// 다른 애플리케이션에서는 require()메소드를 포함시킨 당므 사용할 수 있다.

exports.add = function(a, b) {
	return a + b;
}
exports.minus = function(a, b) {
	return a - b;
}
exports.area = function(a) {
    return a*3.14;
}
exports.PI = 3.14;