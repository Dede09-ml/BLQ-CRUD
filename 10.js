const prompt = require('prompt-sync')({ sigint: true });
var kata = prompt("Input: ")
var result = []
let kataAr = kata.split(" ")
for(let i=0; i<kataAr.length; i++){
    let hurufAwal = kataAr[i][0]
    let hurufAkhir = kataAr[i][(kataAr[i].length)-1]
    result.push(hurufAwal+"***"+hurufAkhir)
}
console.log(result.join(" "))