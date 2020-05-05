const sumAll = function() {

}
sumAll(1, 4);           //10
sumAll(1, 4000);        //8002000
sumAll(123, 1);         //7626
sumAll(-10, 4);         //ERROR
sumAll(10, "90");       //ERROR
sumAll(10, [90, 1]);    //ERROR
module.exports = sumAll
