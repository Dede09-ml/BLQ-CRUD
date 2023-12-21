let kata = ["Sphinx of black quartz, judge my vow", "Brawny gods just flocked up to quiz and vex him", "Check back tomorrow; I will see if the book has arrived."]

let alphabet = "abcdefghijklmnopqrstuvwxyz"

for(let i=0; i<kata.length; i++){
    check = 0
    for(let j=0; j<alphabet.length; j++){

        if(kata[i].toLowerCase().includes(alphabet[j])){
            check+=1
        }

    }

    // console.log(check)
    if(check==26){
        console.log('"'+ kata[i]+ '"', "is Pangram")
    } else {
        console.log('"'+ kata[i]+ '"', "is Not Pangram")
    }
}