function calcular() {
    var c = window.document.getElementById('capital')
    var i = window.document.getElementById('taxa')
    var n = window.document.getElementById('tempo')
    var res = window.document.getElementById('res')
    if(c.value.length == 0 && i.value.length == 0 && n.value.length == 0){
        window.alert("Por favor preencha todas as informações")
    }else{
        var cap = Number(c.value)
        var tax = Number(i.value)
        var temp = Number(n.value)
        var taxjuros = tax/100
        var juros = cap*taxjuros*temp
        var m = cap + juros
        res.innerHTML = `-Seu juros é ${juros}.<br>`
        res.innerHTML += `-Seu Montante é de ${m}.`
    }
}