var num = window.document.getElementById('numero')
var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
    
}
function inList(n , l) {
    if(l.indexOf(Number(n)) != -1 ){// se o valor for diferente de -1 ele é true
        return true
    }else{
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inList(num.value , valores)){ // as duas situações tem que ser verdeiras
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Valor invalido ou numero já preenchido')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione Valores antes de finalizar')
    }else{
         var tot = valores.length
         var maior = valores [0]
         var menor = valores [0] 
         var soma = 0
         var media = 0
        for(var pos in valores){// mesma coisa que for(var pos = 0;pos<valores.length;pos++)
            soma += valores[pos]
            if(valores[pos]> maior){// valor e ele conta, se o valor contado for maior
                maior = valores[pos]// a vareavel atribuio o valor
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números cadastrado é ${tot}</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
        
    }
}