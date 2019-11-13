function foo({name}, fn) {
    fn('hello', name)
}

function someFunction(param1, param2) {
    console.log('yeah')
    console.log(param1, param2)
    console.log('yeah')
}

function otherFunction(param1, param2) {
    console.log('XXXXX ' + param1 + ' YYYYY ' + param2 + ' XXXXX')
}

const person = {
    name: 'Jin Park'
}

foo(person, someFunction)
foo(person, otherFunction)

// what if, as a caller, I want to dictate how to print inside the function?
