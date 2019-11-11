const { getRandomInt, foo } = require('./randomNumberGenerator');

function isMultipleOfThree (number) {
    return number % 3 === 0
}

function isMultipleOfFive (number) {
    return number % 5 === 0
}

function printFizzBuzz(number) {
    if (isMultipleOfFive(number) && isMultipleOfThree(number)) {
        console.log('FizzBuzz')
    } else if (isMultipleOfThree(number)) {
        console.log('Fizz')
    } else if (isMultipleOfFive(number)) {
        console.log('Buzz')
    } else {
        console.log(number)
    }
}

const numbers = []
var i
for (i = 0; i < 100; i++) {
   numbers[i] = getRandomInt(1000)
}

for (i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    printFizzBuzz(number)
}

