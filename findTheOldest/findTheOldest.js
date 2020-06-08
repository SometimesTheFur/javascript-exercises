let findTheOldest = (arr) => {
    arr.reduce((a,b) => {
        const last = (a.yearOfDeath - a.yearOfBirth);
        const next = (b.yearOfDeath - a.yearOfBirth);
        return last > next ? -1 : 1;
    });
    //console.log(oldest)
};
module.exports = findTheOldest
