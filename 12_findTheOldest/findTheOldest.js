const findTheOldest = function(people) {
    let oldest = 0;
    let nameOfOldest = '';

    people.map((p) => {
        let currentAge = 0;
        if(!p.yearOfDeath) {
            currentAge = new Date().getFullYear() - p.yearOfBirth;
        }
        else {
            currentAge = p.yearOfDeath - p.yearOfBirth;
        }

        if(currentAge >= oldest) {
            oldest = currentAge;
            nameOfOldest = p;
        }
    })

    return nameOfOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
