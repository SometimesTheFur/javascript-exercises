const findTheOldest = function(arr) {
    return arr.reduce((a,b) => {
        const first = getAge(a.yearOfBirth, a.yearOfDeath);
        const next = getAge(b.yearOfBirth, b.yearOfDeath);
        return first > next ? a : b;
    }); 
};

const getAge = function(yearOfBirth, yearOfDeath) {
    if(!yearOfDeath) {
       yearOfDeath = new Date().getFullYear(); 
    }
    return yearOfDeath - yearOfBirth;  
}; console.log(getAge())
module.exports = findTheOldest
