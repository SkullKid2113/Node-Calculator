var rs = require('readline-sync');

var numbers = [];

function total(num1, num2) {
  if (whatOp === 'add') {
    return num1 + num2;
  } else if (whatOp === 'subtract') {
    return num1 - num2;
  } else if (whatOp === 'multiply') {
    return num1 * num2;
  } else if (whatOp === 'divide') {
    return num1 / num2;
  }
}

var whatOp = rs.question(
  'What operation would you like to perform? ',
  { limit: ['add', 'subtract', 'multiply', 'divide'] },
  { limitMessage: 'Please enter a valid operation.' }
);

var num1 = rs.questionInt('What is your first number: ', {
  limitMessage: 'Please enter a valid number.',
});
numbers.push(num1);
var num2 = rs.questionInt('What is your second number: ', {
  limitMessage: 'Please enter a valid number.',
});
numbers.push(num2);

total = total(num1, num2);

console.log('The total is ' + total + '.');
