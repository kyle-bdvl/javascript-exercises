const add = function(num1 , num2) {
	return num1 +num2;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  let sum =0;
	for (let i =0;i <array.length;i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(mulArray) {
  let mul = mulArray[0];
  for (let i =1;i<mulArray.length;i++){
    mul *=mulArray[i];
  }
  return mul;

};

const power = function(a,b) {
  return a^b;
	
};

const factorial = function(array) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
