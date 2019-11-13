// this is a function declaration. 
// It does not execute the function
// function has
// name - foo
// (optional) parameter list - bar
// (optional) return value - bar.length (number)
// return returns a value back to the caller
function f(bar) {
    console.log(bar)
    return bar.length
}

function doStuff() {
    console.log('done')
}

// this is function invocation
// y = f(x)
const x = [1, 2, 3]
const y = f(x)
console.log(y)

