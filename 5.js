const prompt = require('prompt-sync')({ sigint: true });
var n = prompt("Input n: ")

let fibb = []
for(let i=0; i<n; i++){
    if(i==0||i==1){
        fibb.push(1)
    } else {
        fibb.push((fibb[fibb.length-1] + fibb[fibb.length-2]))
    }
}
console.log("Bilangan fibbonaci: ", fibb)