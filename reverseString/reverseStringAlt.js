const reverseString = function(str) {
    let splitString = str.split('');
    let reverseArray = splitString.reverse('');
    let joinArray = reverseArray.join('');
    return joinArray;
}
reverseString('hello');
reverseString('hello there');
reverseString('123 abc!');
module.exports = reverseString