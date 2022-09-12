function tabuada(){
  let num = document.getElementById('num')//a var num é um texto 
  let tab = document.getElementById('seltab')  
 
  if(num.value.length==0 ){
    window.alert('[ERRO]Por favor digite um número')
  }else{
    let n = Number(num.value)// a var pegou o valor de num colocou na var n como um número, ou seja o n = número
    tab.innerHTML=""//para limpar a area de selct e não ficar acumulado
    //assim como funciona clrscr(); em c++
    for(let c =1; c<=10; c++ ){
       let item = document.createElement('option')//o create element(option)é como se tivesse sido criado uma tag option  no html 
        item.text=`${n} x ${c} = ${n*c}`//o place holder  pode fazer contas assim como esta em  ${num*c}
        //item.text é a parte de dentro do option o conteudo de option
        item.value=`tab${c}`
        tab.appendChild(item)
    }
  
  }
}