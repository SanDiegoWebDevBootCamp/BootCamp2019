let foo = 3 // number type
let bar = 'brandon' // string type
let isJustinCool = false // boolean type
let sang;   // has default value of undefined
let jin = {
    name: 'Jin Park'
}

console.log(sang)
console.log(jin.address)  // undefined property of an object has the default vlaue of undefined

let person = {
    name: 'Danny Moon',
    age: 21
}

console.log(person)

console.log(typeof person)
console.log(typeof isJustinCool)
console.log(typeof foo)
console.log(bar / 3) // print NaN (Not a Number)
console.log(typeof (bar / 3)) // print NaN (Not a Number)