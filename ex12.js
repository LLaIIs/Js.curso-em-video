var agora= new Date() //Usado para pegar a hora do sistema em que esta rodando Js
var hora = agora.getHours()//linkar 
console.log(`Agora são exatamente ${hora} horas`)
if(hora<=12){
    console.log(`Bom dia!`)
}else if(hora>=18){
    console.log(`Boa noite!`)
}else if(hora>=13){
    console.log(`Boa tarde!`)
}