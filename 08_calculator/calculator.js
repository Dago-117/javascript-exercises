const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  let total = 0;
  for (let number of args) {
    if (typeof number === 'number')
      total += number;
  }
  return total;
};
const multiply = function (a) {
  return a.reduce((a, b) => { return a * b; });
};
console.log(multiply([5, 2, 3]));

const power = function (a, b) {
  return a ** b;

};

const factorial = function (a) {
  if (a === 0 || a === 1)
    return 1;
  else {
    let total = a;
    for (n = a; n > 1; n--) {
      total = total * (n - 1);
    }
    return total;
  }
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
