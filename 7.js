let number = [8,7,0,2,7,1,7,6,3,0,7,1,3,4,6,1,6,4,3]
let mean = number.reduce((a,b)=>(a+b)) / number.length
let median = number[Math.ceil((number.length-1)/2)]
let modus