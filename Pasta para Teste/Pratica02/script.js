function calcular () {
    var cap = window.document.getElementById('capital')
    var taxa = window.document.getElementById('taxajuros')
    var temp = window.document.getElementById('tempo')
    var res = window.document.getElementById('res')
    if(cap.value.length == 0 || taxa.value.length == 0 || temp.value.length == 0){
        window.alert('Preencha as lacunas')
    }else {
        var c = Number(cap.value)
        var tj = Number(taxa.value)
        var tempo = Number(temp.value) 
        var taxaj = tj/100
        var taxaju = (1+taxaj)
        var val = Math.pow(taxaju, tempo)// biblioteca para exponenciação
        var montante = c*val
        res.innerHTML = `O montante é ${montante}`
    }
} 