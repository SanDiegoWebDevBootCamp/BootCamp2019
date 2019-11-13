function isEven(number) {
    const returnValue = (number % 2 === 0)
    console.log(typeof returnValue)
    return returnValue
}

function isMultipleOfFive(number) {
    return (number % 5 === 0)
}

const foo = 5

if (false) {
    if (isEven(foo) || isMultipleOfFive(foo)) {
        console.log('even or multiple of five')
    } else {
        console.log('not suire')
    }
} else {
    // else is optional
    if (isEven(foo)) {
        console.log('even number')
    } else if (isMultipleOfFive(foo)) {
        console.log('multiple of five')
    } else {
        console.log('other numbers')
    }
}

console.log(isEven('brandon'))


console.log('done!')