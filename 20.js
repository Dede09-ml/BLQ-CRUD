const prompt = require('prompt-sync')({ sigint: true });
let jarakAwal = prompt("Input jarak awal: ")
// let suitA = "G G G"
// let suitB = "K K B"
let suitA = prompt("Input suit dari A: ")
let suitB = prompt("Input suit dari B: ") 
let suitAA = suitA.split(" ")
let suitBB = suitB.split(" ")

let A = ""
let B = ""
let jarak = parseInt(jarakAwal)
let posisiAB = [0, jarak]

for(let i=0; i<suitAA.length; i++){
    if(suitAA[i]=="B" && suitBB[i]=="G"){
        A ="win"
        B ="lose"
    } else if(suitAA[i]=="B" && suitBB[i]=="K"){
        B = "win"
        A = "lose"
    } else if(suitAA[i]=="G" && suitBB[i]=="B"){
        B = "win"
        A = "lose"
    } else if(suitAA[i]=="G" && suitBB[i]=="K"){
        A = "win"
        B ="lose"
    } else if(suitAA[i]=="K" && suitBB[i]=="B"){
        A = "win"
        B ="lose"
    } else if(suitAA[i]=="K" && suitBB[i]=="G"){
        B = "win"
        A = "lose"
    }

    if(A=="win"){
        //A menang, B kalah
        posisiAB[0] += 2
        posisiAB[1] += 1
    } else if(A=="lose"){
        //B menang, A kalah
        posisiAB[0] +=  -1
        posisiAB[1] += -2
    }

    // console.log(A,B)
    // console.log(posisiAB)
    if(posisiAB[0]==posisiAB[1]){
        console.log("A:",A, "B: ",B)
        break
    } else {
        A=""
        B=""
    }

}
if(A==B){
    console.log("Draw")
}