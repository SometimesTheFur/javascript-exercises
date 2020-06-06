let findTheOldest = (arr) => {
   const getAge = arr.reduce((person) => {
         (person.yearOfDeath - person.yearOfBirth);
    }, 0);
    console.log(getAge);
    //const getAge = person.yearOfDeath - person.yearOfBirth;
    // const oldest = getAge.reduce((a,b) => {
    //     return a + (b.yearOfDeath - b.yearOfBirth);

    // }, 0);
}; 
module.exports = findTheOldest
