const add = function(...args) {
  //apparently you shouldn't use += to accumulate total (same with -=)
  return args.reduce((total, currentValue) => total + currentValue);
};

const subtract = function(...args) {
	return args.reduce((total, currentValue) => total - currentValue);
};

const sum = function(arr) {
  // Second argument (0) sets an initial value to total, useful if arr is an empty array
	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(...args) {
	return args.reduce((accumulator, currentValue) => accumulator ** currentValue)
};

const factorial = function(num) {
  if (num === 0) return 1;
  
  //at this point arr is a sparse array since values between arr[0]
  //and arr[num-1] are undefined, if num is greater than 2
  //the map method cannot iterate over all elements in a sparse array
  let arr = [1];
  arr[num-1] = num;

  //using the spread syntax (...arr) will make the map method work on
  //sparse arrays
  [...arr].map((value, index) => {
    value = index + 1;
    arr[index] = value;
  });


	return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
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
