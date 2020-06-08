const findTheOldest = (arr) => {
    return arr.reduce((a,b) => {
        const first = getAge(a.yearOfDeath, a.yearOfBirth);
        const next = getAge(b.yearOfDeath, b.yearOfBirth);
        return first < next ? b : a;
    });
    
};

const getAge = (yearOfBirth, yearOfDeath) => {
    if(!yearOfDeath) {
       return yearOfDeath = new Date().getFullYear(); 
    }
    return yearOfDeath - yearOfBirth;  
};
module.exports = findTheOldest
