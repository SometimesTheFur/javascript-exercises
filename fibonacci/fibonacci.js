const fibonacci = function(fib) {
    const n = parseInt(fib);
    //const s = n.split();
    if(n === 1 || n === 0) {
        return n;
    }else if(n < 0) {
        return "OOPS";
    }else if(n > 1) {
        return n.push(n[n.length - 1] + n[n.length - 2]);
    }
    //const s = (n - 1);

    
}

module.exports = fibonacci
