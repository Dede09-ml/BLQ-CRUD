let deret = "3 9 0 7 1 2 4"
let deretAr = deret.split(" ")
console.log(deretAr)

const prompt = require('prompt-sync')({ sigint: true });
var n = prompt("Input N: ")
let result1 = []
for(let i=0; i<n; i++){
    result1.push(deretAr[i])
}
let result2 = []
for(let i=n; i<deretAr.length; i++){
    result2.push(deretAr[i])
}

console.log(result2.concat(result1).join(" "))