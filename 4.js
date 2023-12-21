const prompt = require('prompt-sync')({ sigint: true });
var n = prompt("Input n: ")

let prime = []
for (let i = 2; i <= n; i++) {
    let check = 0

    for (let j = 1; j <= n; j++) {
        if (i % j == 0) {
            check += 1
        }
    }

    if (check == 2) {
        prime.push(i)
    }
}

console.log("Bilangan Prima: ", prime)