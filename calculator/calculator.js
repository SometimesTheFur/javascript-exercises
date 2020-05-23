add = (a,b) => (a + b);

subtract = (a,b) => (a - b);

sum = ([...args]) => ([...args].reduce((a,b) => a + b, 0));

multiply = ([...args]) => ([...args].reduce((a,b) => a * b, 1));

power = (a,b) => Math.pow(a,b);

factorial = (n) => (n ? n * factorial(n - 1) : 1);

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}