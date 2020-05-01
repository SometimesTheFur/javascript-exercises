const repeatString = function() {
    let hey = ''
    function strings(text){
        text = hey.concat('hey');
        return hey
    }
    return strings(hey);
}
module.exports = repeatString
