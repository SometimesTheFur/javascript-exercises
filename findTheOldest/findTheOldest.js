const findTheOldest = (arr) => {
    return arr.reduce((a,b) => {
        const first = getAge(a.yearOfBirth, a.yearOfDeath);
        const next = getAge(b.yearOfBirth, b.yearOfDeath);
        return first > next ? a : b;
    }); 
};

const getAge = (yearOfBirth, yearOfDeath) => {
    if(!yearOfDeath) {
       yearOfDeath = new Date().getFullYear(); 
    }
    return yearOfDeath - yearOfBirth;  
};
module.exports = findTheOldest
