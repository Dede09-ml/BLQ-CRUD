let waktuMeleleh = [1,1,2,3,5,8,13]
let panjangLilin = [3,3,9,6,7,8,23]
let Lilin = [3,3,9,6,7,8,23]


let statusLilin = 1 //belum habis
let hasil = ""
do {

    for(let i=0; i<panjangLilin.length; i++){
      panjangLilin[i] += -1*waktuMeleleh[i]
      
      if(panjangLilin[i]<=0){
        statusLilin = 0
        hasil += Lilin[i]
        break
      }
      
    }

} while (statusLilin!=0)

console.log("Lilin yang pertama habis adalah lilin yang panjangnya", hasil)