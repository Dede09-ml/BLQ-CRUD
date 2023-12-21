let waktu = "03:40:44 PM"
let jam = waktu.substr(0,2)
let jamDalamFormat = parseInt(jam) + 12
console.log(jamDalamFormat + waktu.substr(2,6))