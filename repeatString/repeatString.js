const repeatString = function(str,i) {
    let hey = ''
    if (i < 0) return 'ERROR';
    if (i === 0) return ''
    if (i > 0) return str.repeat(i);

    while(i <= 10) {
        hey += str;
        i++;
    return hey;
    }

    repeatString('hey',-1); 
    repeatString('hey',0);
    repeatString('hey',1);
    repeatString('hey',3);
    repeatString('hey',10);
}
module.exports = repeatString