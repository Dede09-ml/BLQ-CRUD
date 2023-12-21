let jamMakanKue = [9, 13, 15, 17]
let kaloriKue = [30, 20, 50, 80]
let mulaiOlahraga = 18
let lamaOlahraga = 0

for (let i = 0; i < kaloriKue.length; i++) {
    lamaOlahraga += (0.1 * kaloriKue[i] * (mulaiOlahraga - jamMakanKue[i]))
}

let banyakMinum = ((lamaOlahraga/30)*100) + 500
console.log("Donna minum air", banyakMinum, "cc selama berolahraga")