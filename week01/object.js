const fruit = {
    name: 'banana',
    unitPrice: .20,
    brand: 'Dole',
    quality: 'fair',
    weight: 1.5,
    origin: 'California'
}

// Object is what we call stuff in development
// property is something interesting about a particular object
// value of property is the actual content.

console.log(fruit)

// dot notation is how Javascript access the value of property in object
console.log('unitPrice:', fruit.unitPrice)
console.log('foo:', fruit.foo)

// you can use dot notation to assign a new value to a property
fruit.brand = 'Amazon'
console.log(fruit)

// assign a value of non-existent property
fruit.foo = 'bar'
console.log(fruit)

// you could access and assign the property using array notation
console.log(fruit['foo']) // this is equivalent to console.log(fruit.foo)
console.log('fruit[6]', fruit[6])

fruit['sadf23asdf97(*&(&(*&'] = 'Jin'
console.log(fruit)

// JSON - Javascript Simple Object Notation