// Write a block code using for loop 
// that prints out items in an array one line at a time with "foo" at the beginning

// foo Yamaha
// foo Honda
// foo HarleyDavidson
// foo Ducati
// foo Kawasaki
// foo MVAugusta

const motorcycles = ['Yamaha', 'Honda', 'HarleyDavidson', 'Ducati', 'Kawasaki', 'MVAugusta']

var i;
for (i = 0; i < motorcycles.length; i = i + 1) {
    console.log('foo', motorcycles[i]); 
}

console.log('foo', 'bar', 'hello')

// () is a way to call a function
// function can have multiple parameters.
// f(x)
// f(x, y)
// console.log can take one or more parameters
