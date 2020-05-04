const reverseString = function(str) {
    let revString = '';
    for(let i = (str.length -1); i >= 0; --i){
        revString += str[i];
    }
    return revString;
}
reverseString('hello');
reverseString('hello there');
reverseString('123 abc!');
module.exports = reverseString
