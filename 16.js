const prompt = require('prompt-sync')({ sigint: true });
var n = prompt("Input Jumlah Makanan yang dipesan: ")
let hargaMakanan = 0
let hargaKhususIkan = 0

for (let i = 1; i <= n; i++) {
    var mak = prompt("Nama makanan " + i + " : ")
    var har = prompt("Harga makanan " + i + " : ")
    var ikan = prompt("Apakah ikan mengandung ikan Y/N: ")


    if (ikan == "Y") {
        hargaKhususIkan += parseInt(har)
    } else {
        hargaMakanan += parseInt(har)
    }
}

let pajakMakanan = (0.1 * parseInt(hargaMakanan))
let servMakanan = (0.05 * parseInt(hargaMakanan))
let pajakIkan = (0.1 * parseInt(hargaKhususIkan))
let servIkan = (0.05 * parseInt(hargaKhususIkan))

let bayarMakanan = (hargaMakanan+pajakMakanan+servMakanan) / 4
let bayarIkan = (hargaKhususIkan+pajakIkan+servIkan) / 3

for (let j = 1; j <= 4; j++) {
    if (j == 4) {
        console.log("Orang " + j + ": " + bayarMakanan)
    } else {
        console.log("Orang " + j + ": " + (bayarMakanan + bayarIkan))

    }
}



