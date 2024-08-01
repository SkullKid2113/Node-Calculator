var rs = require('readline-sync');

function calculate(numbers) {
  var result = rs.question('What is the operation you wish to perform? ');
  if (result === 'add') {
    var result = numbers[0] + numbers[1];
  } else if (result === 'subtract') {
    var result = numbers[0] - numbers[1];
  } else if (result === 'multiply') {
    var result = numbers[0] * numbers[1];
  } else if (result === 'divide') {
    var result = numbers[0] / numbers[1];
  } else {
    console.log('Invalid Operation');

    calculate(numbers);
  }
  console.log('The result is', result);
}
var numbers = [];

var calculation = Number(
  rs.questionInt('What is the first number of the calculation? ')
);

numbers.push(calculation);

var calculationTwo = Number(
  rs.questionInt('What is the second number of the calculation? ')
);

numbers.push(calculationTwo);

calculate(numbers);
