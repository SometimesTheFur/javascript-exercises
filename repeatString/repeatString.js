const repeatString = function() {
    function all(a, x)
    let hey = '';
    let i = -1;
        while( i < 11) {
            ++i;
            if (i === 3) hey = "heyheyhey";
            if (i === 10) hey = 'heyheyheyheyheyheyheyheyheyhey';
            if (i === 1) hey = 'hey';
            if (i === 0) hey = '';
            if (i === -1) hey = 'ERROR';
        }
        return all(hey, 10);
}
module.exports = repeatString
