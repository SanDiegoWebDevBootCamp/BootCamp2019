const cars = ['toyota', 'honda', 'lexus', 'hyundai', 'kia']
console.log('cars.length: ', cars.length)

var i;
// for loop. Body is statements between curly braces
//    i = 0: initialization. this happens only once
//    i < cars.length: Execute the body only when this is true. this is evaluated every time
//    i = i + 1: this happens after the body is executed
for (i = 0; i < cars.length; i = i + 1) {
    console.log(i)
    console.log('hello', cars[i])
}

console.log('done!')
