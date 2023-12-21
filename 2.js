const oneDay = 24 * 60 * 60 * 1000
let first1 = new Date(2016,1,28)
let second1 = new Date(2016, 2, 7)
let diff1 = Math.round(Math.abs(second1-first1)/oneDay)
// console.log(diff1)
let first2 = new Date(2018,3,29)
let second2 = new Date(2018, 4, 30)
let diff2 = Math.round(Math.abs(second2-first2)/oneDay)
// console.log(diff2)

let books = ["A","B","C","D"]
let duration = [14,3,7,7]

// Perhitungan denda 28 Feb 2016 - 7 Maret 2016
let resultA = []
for(let i=0; i<duration.length; i++){
    let late = diff1-duration[i]
    if(late<=0){
        resultA.push((books[i] + ": " + 0).toString())
    } else {
        resultA.push((books[i] + ": " + late*100).toString())
    }
}
console.log(resultA)

// Perhitungan denda 28 Feb 2016 - 7 Maret 2016
let resultB = []
for(let j=0; j<duration.length; j++){
    let late = diff2-duration[j]
    if(late<=0){
        resultB.push((books[j] + ": " + 0).toString())
    } else {
        resultB.push((books[j] + ": " + late*100).toString())
    }
}
console.log(resultB)
