const parkir1 = ["January, 27 2019 05:00:01", "January, 27 2019 17:45:03"]
const parkir2 = ["January, 27 2019 07:03:59", "January, 27 2019 15:30:06"]
const parkir3 = ["January, 27 2019 07:05:00", "January, 28 2019 00:20:21"]
const parkir4 = ["January, 27 2019 11:14:23", "January, 27 2019 13:20:00"]
const parkir = [parkir1, parkir2, parkir3, parkir4]
// console.log(parkir)
let tarif = []

for (let i = 0; i < parkir.length; i++) {
    let dateAwal = new Date(parkir[i][0])
    let dateAkhir = new Date(parkir[i][1])
    // console.log(dateAkhir-dateAwal)

    //waktu parkir dalam detik
    let waktuParkirDalamJam = Math.abs((dateAkhir-dateAwal) / (60 * 60 * 1000))
    // console.log(waktuParkirDalamJam)
    var bayarParkir = 0
    if (waktuParkirDalamJam > 24) {
        bayarParkir = 15000 + (Math.ceil(waktuParkirDalamJam) - (24)) * 1000
    } else if (waktuParkirDalamJam > 8) {
        bayarParkir = 8000
    } else {
        bayarParkir = Math.ceil(waktuParkirDalamJam) * 1000
    }

    // console.log("Lama parkir: ", Math.ceil(waktuParkirDalamJam), ", bayar: ", bayarParkir)
    tarif.push(bayarParkir)
}

console.log("Tarif: ", tarif)



