const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    //if (isNaN(min) || isNaN(max)) return "ERROR"; This only worked for the string test, but not the last test that included an object.
    if (typeof min !== 'number' || typeof max !== 'number') return "ERROR";
    if (min > max) {
        let x = min;
        min = max;
        max = x;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
         sum += i;       
    }
    return sum;
}
sumAll([1, 4]);           //10
sumAll(1, 4000);        //8002000
sumAll(123, 1);         //7626
sumAll(-10, 4);         //ERROR
sumAll(10, "90");       //ERROR
sumAll(10, [90, 1]);    //ERROR
module.exports = sumAll
