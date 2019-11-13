'use strict';

function foo(bar) {
    // i has a function scope because it was declared with var
    for (var i = 0; i < bar.length; i++) {
        var j = 'hello' + i;
        console.log('print bar[i] ' + bar[i])
    }
    console.log(i)
    console.log(j)
}

function foo2(bar) {
    // i has a block scope because it was declared with let
    // i is not visible outside of for block
    for (let i = 0; i < bar.length; i++) {
        console.log(bar[i])
    }
    // console.log(i);
}

// foo([1,2,3])

foo2([1,2,3])