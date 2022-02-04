var pes = document.getElementById('peso')
var alt = document.getElementById('altura')
var res = document.getElementById('resultado')

function calcular(){
   res.innerHTML = ''
   if(pes.value == 0 || alt.value == 0) {
      res.innerHTML = 'verifique os dados !'
      res.style.color = 'rgb(167, 0, 0)'
   }else{
      var p = Number(pes.value)
      var a = Number(alt.value)
      a = a / 100
      cal = p / a ** 2
      res.innerHTML += `<p> Seu IMC é ${(cal).toFixed(2)} </p>`
      res.style.color = '#fff'
      if( cal < 18.5){
         res.innerHTML += `<p> Você esta abaixo do pesso! </p>`
         res.style.color = 'rgb(167, 0, 0)   '
      } else if(cal <= 25){
         res.innerHTML += `<p> Você esta com o peso normal </p>`
      } else if(cal <= 30 ){
         res.innerHTML += `<p> Você esta acima do peso!`
         res.style.color = 'rgb(167, 0, 0)'
      }else if(cal <= 35 ){
         res.innerHTML += `<p> [ALERTA] Você esta com obesidade grau I ! </p>`
         res.innerHTML += `<p> Proucure um nutricionista ! </p>`
         res.style.color = 'rgb(167, 0, 0)'
      }else if (cal <= 40){
         res.innerHTML += `<p> [ALERTA] Você esta com obesidade grau II ! </p>`
         res.innerHTML += `<p> Proucure um nutricionista ! </p>`
         res.style.color = 'rgb(167, 0, 0)'
      }else{
         res.innerHTML += `<p> [ALERTA] Você esta com obesidade grau III ! </p>`
         res.innerHTML += `<p> Proucure um nutricionista ! </p>`
         res.style.color = 'rgb(167, 0, 0)'
      }
   }
}


// CAUCULO COM ALERT //
/*alert ('ola,aqui vamos calcular seu IMC')

var a = Number(prompt('Qual seu altura?'))
var p = Number(prompt('Qual seu peso?'))
var r = Number((a * a / p)).toFixed(2)

alert ('seu IMC é ' + r)
*/
