//variáveis simples só conseguem armazenar um valor por vez

/* vaga a=paulo(0),maria(1,)isaque(2) 
O array, vetor ou variável composta é uma variável que tem varios elementos 
cade elemento é composta por seu valor(conteúdo)
e por uma chave (índice)
*/
let num =[2,5,4]
num[3]=6 //esse código é para adicionar valores ao vetor
         //coloque o valor 6 na posição 3
num.push(7)///esse codigo adiciona o valor 7 sem se preocupar em que posição

//num.length/esse atributo serve para descobrir o comprimento da var num
//num.sort()ele pega os elementos e coloca em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(num)
