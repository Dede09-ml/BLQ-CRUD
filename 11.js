const prompt = require('prompt-sync')({ sigint: true });
var kata = prompt("Input: ")
var kataRev = kata.split("").reverse()
var result = []
for(let i=0; i<kataRev.length; i++){
    result.push("***" + kataRev[i] + "***")
}
console.log(result.join("\n"))