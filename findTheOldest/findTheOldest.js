let findTheOldest = (person) => {
    const person = arr.sort((a, b) => {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
    });
    //const getAge = person.yearOfDeath - person.yearOfBirth;
    // const oldest = getAge.reduce((a,b) => {
    //     return a + (b.yearOfDeath - b.yearOfBirth);

    // }, 0);
    return ;
};
module.exports = findTheOldest
