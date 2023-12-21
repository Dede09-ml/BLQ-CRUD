let kacaMata = [500,600,700,800]
let baju = [200,400,350]
let sepatu = [400,350,200,300]
let buku = [100,50,150]

const prompt = require('prompt-sync')({ sigint: true });
let uang = prompt("Jumlah uang: ")

var parts = [kacaMata, baju, sepatu, buku],
    result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));

// console.log(result);
let arrItem = []
let arrSum = []

for(let i=0; i<result.length; i++){
    let sum = result[i].reduce((partialSum, a) => partialSum + a, 0);
    if(sum<=parseInt(uang)){
        arrItem.push(result[i])
        arrSum.push(sum)
    }
}

let hargaMax = Math.max(...arrSum)
for(let j=0; j<arrSum.length; j++){
    if(hargaMax==arrSum[j]){
        console.log("Jumalh item yang bisa dibeli: " + arrItem[j].length+ " , kaca mata", arrItem[j][0], " baju", arrItem[j][1], "sepatu", arrItem[j][2], "buku", arrItem[j][3])
    }
}