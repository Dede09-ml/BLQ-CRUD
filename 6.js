const prompt = require('prompt-sync')({ sigint: true });
var kata = prompt("Input kata: ")
var kataReverse = ""
for (let i = (kata.length - 1); i >= 0; i--) {
    kataReverse += kata[i]
}
// console.log(kataReverse)
if (kata == kataReverse) {
    console.log("Kata ini palindrome")
} else {
    console.log("Kata ini tidak palindrome")
}
