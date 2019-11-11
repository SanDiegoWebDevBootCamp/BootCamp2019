function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const isMultipleOfThree = (number) => number % 3 === 0
const isMultipleOfFive = (number) => number % 5 === 0

// && logical AND
// || logical OR

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

numbers.forEach(number => printFizzBuzz(number))