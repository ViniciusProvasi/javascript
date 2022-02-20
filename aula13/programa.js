
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Digite um ano para obter o valor')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//convertendo uma String pra Numero
        var gênero = ''// uma string começando vazia esperando o retorno do usuario 
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){//checagem do gênero
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src' , 'menino.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'jmenino.jpg')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','amenino.jpg')
            }else{
                //Idoso
                img.setAttribute('src','imenino.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src','menina.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src','jmenina.jpg')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','amenina.jpg')
            }else{
                //Idosa
                img.setAttribute('src','imenina.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}