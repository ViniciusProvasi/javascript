function calcular() {
    var n = window.document.getElementById('numero')// ainda é uma string e tem que ser convertida
    var tab = window.document.getElementById('seltab')// tabelinha
    if(n.value.length == 0){ // se o valor dá caixa for 0, length = numero de caracteres
        window.alert('Não encontrei nenhum valor')
    }else{
        var tabuada = Number(n.value)// valor convertido
        tab.innerHTML ='' // quando coloca outro valor e ele apaga o passado
        for (var c = 1; c <=10 ; c++){
            var item = window.document.createElement('option') // cria um elemento option
            item.text = `${tabuada} x ${c} = ${tabuada*c}` // faz a importação do texto 
            tab.value = `tab${c}` //seletor na tabela, tras um valor, que pode ser usado em algumas liguagem
            tab.appendChild(item)// mostra o item filho na tela
          
        }
    }
}