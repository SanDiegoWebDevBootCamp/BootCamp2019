function foo(callback) {
    setTimeout(() => {
        console.log('foo')
        callback();
    }, 3000)
}

function bar(callback) {
    setTimeout(() => {
        console.log('bar')
        callback();
    }, 2000)
}

function baz(callback) {
    setTimeout(() => {
        console.log('baz')
        callback();
    }, 1000)
}


foo(function() {
    bar(function() {
        baz(function() {
            console.log('done!')
        })
    })
})