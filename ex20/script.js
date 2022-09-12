function contar(){
let ini = document.getElementById('txi')
let fim = document.getElementById('txf')
let passo = document.getElementById('txp')
let res = document.getElementById('res')

if(ini.value.length == 0 || fim .value.length == 0 || passo.value.length == 0 ){
    window.alert('[ERRO!] faltam dados')
}else{
    res.innerHTML=`<p>Contando<strong>...</strong></p>`
    let i= Number(ini.value)
    let f=Number(fim.value)
    let p=Number(passo.value)
    if(p<=0){
        window.alert('Passo inválido, considerando passo = 1 ')
        p=1
    }
    if(i<f){
    for(let c =i; c<=f;c+=p){//c+=p significa receber ele mesmo mais p 
       res.innerHTML+=`${c} \u{1F449}	` //\u{unicode emoji list}
       //esse codigo faz a contagem crescente
    }}else{
        for(let c =i; c>=f; c-=p ){
            res.innerHTML+=`${c}\u{1F449}`
            //esse codigo faz a contagem decrescente
        }
    }
}

}
