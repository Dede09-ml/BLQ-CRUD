const prompt = require('prompt-sync')({ sigint: true });
var n = prompt("Input N: ")
let result = ""
for(let i=1; i<=n; i++){
    let a = i*n
    result += a+" "
}
console.log(result)
