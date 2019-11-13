function foo(bar) {
    return bar.length
}

// this function destructures incoming parameter
// function ignores extra parameters.
function printName({ name, age}, {title, author}) {
    console.log('name', name)
    console.log('age', age)
    console.log('title', title)
    console.log('author', author)
}

const person = {
    name: 'Jin Park',
    age: 34
}
const person2 = {
    name: 'Sang Yum',
}

const book = {
    title: 'Hobbits',
    author: 'Brandon'
}

// printName(person)
// printName2(person2)

// console.log(typeof [person, person2])
printName(person, person2, book)