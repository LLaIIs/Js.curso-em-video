function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
 if( fano.value.length == 0 || fano.value > ano ){ 
        window.alert('[ERRO] verifique os dados e tente novamente!')
      
}else{
       var idade = ano - Number(fano.value) 
       res.innerHTML=`<p> Sua idade é ${idade}</p>`
       //res.style.textAlign='center' = o comando ira centralizar em js
        /* var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.appendChild(img)
        esse comando cria a tag imagem no proprio js diferente 
        do ex 15 onde foi criado no html 
        appendChilde= adicionar um elemento filho*/ 

    }
}