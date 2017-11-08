var calc = require('./sample3-module');

var result = calc.add(10, 30);
console.log('덧셈결과', result);

console.log(calc.area(3));
console.log(calc.PI);

var calculator = require('./sample3-module2');

var result2 = calculator.divide(3, 4);
var result3 = calculator.multiple(4, 4);
console.log(result2);
console.log(result3);