let jalan = "N N T N N N T T T T T N T T T N T N"

let jalanArr = jalan.split(" ")
console.log(jalanArr)

let hitung = 0
let gunung = 0
let lembah = 0
let tanda = jalanArr[0]

for (let i = 0; i < jalanArr.length; i++) {
    // console.log(tanda)
    if (jalanArr[i] == "N") {
        hitung += 1
    } else {
        hitung -= 1
    }

    if (hitung == 0 && tanda == "N") {
        gunung += 1
        tanda = jalanArr[i + 1]
    } else if (hitung == 0 && tanda == "T") {
        lembah += 1
        tanda = jalanArr[i + 1]
    }

}

console.log("Gunung:", gunung)
console.log("Lembah: ", lembah)