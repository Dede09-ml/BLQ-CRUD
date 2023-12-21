const prompt = require('prompt-sync')({ sigint: true });
var input = prompt("Input: ")
var number = input.split(" ")

function sort(number){
    for (let i = 0; i < number.length - 1; i++){

        let check = false

        for (let j = 0; j < number.length - i - 1; j++){
          
            if (number[j] > number[j+1]){
                let temp = number[j]
                number[j] = number[j+1]
                number[j+1] = temp
                check = true
            }
        }

        if(!check) break;
    }

    return number
}

console.log(sort(number).join(" "))

