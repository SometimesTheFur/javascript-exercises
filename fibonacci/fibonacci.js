const fibonacci = function(fib) {
    let n = parseInt(fib);
    let [a, b] = [0, 1];
    if(n === 1 || n === 0) {
        return n;
    }else if(n < 0) {
        return "OOPS";
    }else if(n > 1) {
        while (--n > 0) {
            [a, b] = [b, a + b];
        }
        return b;
    }

    
}

module.exports = fibonacci
