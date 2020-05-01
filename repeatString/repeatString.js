const repeatString = function() {
    let hey = ''
    function strings(text){
        text = hey.concat('hey');
        return hey
    }
    return strings(hey,3);
}
module.exports = repeatString
