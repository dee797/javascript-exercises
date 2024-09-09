const findTheOldest = function(people) {
    const today = new Date();

    const newPeople = people.map((person) => {
        if ("yearOfDeath" in person) {
            person["age"] = person.yearOfDeath - person.yearOfBirth;
        } else {
            person["age"] = today.getFullYear() - person.yearOfBirth;
        }
        return person;
    });

    newPeople.sort((secondPerson, firstPerson) => secondPerson.age - firstPerson.age);

    return newPeople[newPeople.length - 1];
};


// Do not edit below this line
module.exports = findTheOldest;
