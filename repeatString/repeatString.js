const repeatString = function() {

    function strings(str, i){
        let hey = ''
            if (i < 0) return 'ERROR';
            if (i === 0) return ''
            if (i > 0) return str.repeat(i);

        while(i <= 10) {
            hey += str;
            i++;

        }
        return hey;
    }   
    strings('hey',-1); 
    strings('hey',0);
    strings('hey',1);
    strings('hey',3);
    strings('hey',10);

}
module.exports = repeatString