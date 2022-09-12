function carregar(){
var msg = window.document.getElementById('msg')
var img =  window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min= data.getMinutes()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()


msg.innerHTML=`<p>${hora}<strong>:</strong>${min}</p>`
var dsem=data.getDay()

switch(dsem){
   
    case 0:
        msg.innerHTML+=`<p>Domingo  ,${dia}  de,</p>`
        break
    case 1:
        msg.innerHTML+=`<p>Segunda, ${dia} de </p>`
        break
    case 2:
        msg.innerHTML+=`<p>Terça, ${dia}  de</p>`
        break
    case 3:
        msg.innerHTML+=`<p>Quarta, ${dia} de </p>`
        break
    case 4:
        msg.innerHTML+=`<p>Quinta, ${dia} de</p>`
        break
    case 5:
        msg.innerHTML+=`<p>Sexta, ${dia} de</p>`
        break
    case 6:
        msg.innerHTML+=`<p>Sábado, ${dia} de </p>`
        break
    default:
    
}

switch(mes){
    case 0:
      var i=  msg.innerHTML+=`<p>Janeiro  de ${ano}</p>`
        break
    case 1:
        msg.innerHTML+=`<p>Fevereiro  de ${ano}</p>`
        break
    case 2:
        msg.innerHTML+=`<p>Março  de ${ano}</p>`
        break
    case 3:
        msg.innerHTML+=`<p>Abril de ${ano}</p>`
        break
    case 4:
        msg.innerHTML+=`<p>Maio  de ${ano}</p>`
        break
    case 5:
        msg.innerHTML+=`<p>Junho  de ${ano}</p>`
        break
    case 6:
        msg.innerHTML+=`<p>Julho  de ${ano}</p>`
        break
    case 7:
        msg.innerHTML+=`<p>Agosto  de ${ano}</p>`
        break
    case 8:
        var y=  msg.innerHTML+=`<p>Setembro de ${ano}</p>`
        break
    case 9:
        msg.innerHTML+=`<p>Outubro  de ${ano}</p>`
        break
    case 10:
        msg.innerHTML+=`<p>Novembro  de ${ano}</p>`  
        break
    case 11:
        msg.innerHTML+=`<p>Dezembro  de ${ano}</p>`
        break
        default:
        
}

  
if(hora >= 0 && hora < 12){
//Bom dia 
    img.src='l2.png'
    document.body.style.background='#01859a'
}else if(hora >= 12 && hora < 18){
//Boa tarde 
   img.src= 'l1.png'
   document.body.style.background='#d3c7c3'
}else {
//Boa noite
   img.src='ll.png' 
   document.body.style.background='#546761'
}

}


