
const a = 'Yes'

const ap = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Cancel')
    }, 2000)
})

console.log(a) 
console.log(ap)

ap.then( e => {
    return `My answer is : ${e}`
})
.then(e => {
    console.log(e);
}).catch( e => {
    console.log(e);
})