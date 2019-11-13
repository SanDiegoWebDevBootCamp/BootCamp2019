function getMyInstagramPosts(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Done getting instagram posts');
            resolve(['a', 'b', 'c'])
        }, 1000)
    })
}

const userId = 'sangyum'
const promise = getMyInstagramPosts(userId)
    .then(result => {
        console.log('my instagram posts', result);
        // console.log(promise)
    })
    .catch(error => {
        console.log(error)
    })

console.log(promise)

setTimeout(() => console.log(promise), 1000)

