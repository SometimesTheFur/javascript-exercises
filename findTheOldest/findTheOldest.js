let findTheOldest = (arr) => {
    return arr.reduce((a,b) => {
        const last = (a.yearOfDeath - a.yearOfBirth);
        const next = (b.yearOfDeath - a.yearOfBirth);
        return last < next ? b : a;
    });
    //console.log(oldest)
};
module.exports = findTheOldest
