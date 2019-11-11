const firstName = 'Brandon'
const lastName = 'Yum'

const person = {
    race: 'Asian',
    firstName: 'Danny',
    lastName: 'Moon',
    age: 21,
    gender: 'male',
    
    // this is a method (or behavior)
    getFullName: function () {
        // return 'Danny Moon'
        return this.firstName + ' ' + this.lastName;
    },

    getGreeting: function (greeting) {
        return greeting + ' ' + this.firstName;
    }
}

const person2 = {
    race: 'Asian',
    firstName: 'Brandon',
    lastName: 'Yum',
    age: 24,
    gender: 'male',
    
    // this is a method (or behavior)
    getFullName: function () {
        // return 'Danny Moon'
        return this.firstName + ' ' + this.lastName;
    },

    getGreeting: function (greeting) {
        return greeting + ' ' + this.firstName;
    }
}


console.log(person);
console.log(person.getFullName())
console.log(person2.getFullName())
console.log(person.getGreeting('Hello'))
// console.log(getyFullName());
console.log(person.race)