const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(values) {
  initialValue = 0;
  const sumResult = values.reduce((accumulator, currentValue) => 
    accumulator + currentValue, initialValue
  );

	return sumResult;
};

const multiply = function(values) {
  initialValue = 1;
  const multResult = values.reduce((accumulator, currentValue) => 
    accumulator * currentValue, initialValue
  );

	return multResult;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
  let result = 1;
  for(let i = num1; i > 0; i--) {
    result *= i;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
