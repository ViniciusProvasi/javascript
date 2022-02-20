function calcular() {
    var inicio = window.document.getElementById('inicio')
    var passo = window.document.getElementById('passos')
    var fim = window.document.getElementById('final')
    var res = window.document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        //window.alert('[ERRO] Preencha os dados')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var p = Number (passo.value)
        var f = Number(fim.value)
        if(p <= 0){
            p = 1
        }
        if (i > f){
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }else{
            for(c = i;c >=f ; c -=p){
                res.innerHTML += ` ${c} ` 
            }
        }

    }
}