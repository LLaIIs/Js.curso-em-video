
let num=[1,34,5,6]
/*console.log(num[0])
console.log(num[1])
console.log(num[2])
-----------------
for(let pos = 0 ; pos< num.length ; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

let oi=[2,2,3,7,8]
let yi=oi.indexOf(2,2)//Quando o numero não é encontrado no vetor retorna -1
console.log(`o valor esta na posição ${yi}`)