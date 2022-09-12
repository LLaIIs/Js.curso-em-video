let num = document.getElementById('num')
let lista = document.getElementById('selana')
let res=document.getElementById('res')
let val =[]
function isNumero(n){
if(Number(n)>=1 && Number(n)<=100){
    return true
}else{
    return false
}
}
function inLista(n,l){
if(l.indexOf(Number(n))!=-1){
    return true
}else{ return false}
}

function adicionar(){
   
    if(isNumero(num.value) && !inLista(num.value, val)){//isnumero vai verificar se é um numero e se !in não estiver em lista
       val.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''

    }else{
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    num.value=''
    num.focus()// O mouse foca na caixa de texto para voltar a fazer o cursor piscar
}
function finalizar(){
    if(val.length==0){
        window.alert('Não foi encontrado nenhum valor na lista')
    }else {
        let total = val.length
        let soma=0
        let media=0
        let maior=val[0]
        let menor = val[0]
        for(let pos in val){
            soma+=val[pos]
            if(val[pos]>maior)
                maior=val[pos]
            if(val[pos]<menor)
            menor=val[pos]
            
        }
        media=soma/total
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML+=` <p>O menor valor informado foi ${menor}</p> `
        res.innerHTML+=` <p>Somando todos os valores, temos ${soma }</p> `
        res.innerHTML+=` <p>A media é ${media}</p> ` 
    }
}
