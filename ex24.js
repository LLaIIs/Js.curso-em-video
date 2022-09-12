/*function ação(parâmetro){ação
    return res
} ação(5)- chamada da ação*/

function parimp(n){
    if(n%2==0){
        return'par'
    }else{
        return'impar'
    }
}
console.log(parimp(2))

function soma(n1=0,n2=0){
    return n1+n2
}
console.log(soma(2))