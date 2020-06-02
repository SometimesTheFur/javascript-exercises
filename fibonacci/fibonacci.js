const fibonacci = function(fib) {
    const n = parseInt(fib);
    const s = n.split();
    (s === 1) ? 1 : s.push(s[s.length - 1] + s[s.length - 2]);
    //const s = (n - 1);

    
}

module.exports = fibonacci
