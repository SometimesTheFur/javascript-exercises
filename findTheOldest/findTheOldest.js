let findTheOldest = function(arr) {
    const oldest = arr.sort((a,b) => {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - a.yearOfBirth;
        return last > next ? -1 : 1;
    });
    return arr
} 

module.exports = findTheOldest
