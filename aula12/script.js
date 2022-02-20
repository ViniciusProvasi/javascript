function carregar() {
    var msg = window.document.getElementById('msg')
    var formalidade = window.document.getElementById('formalidade')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
 
    if(horas < 12){
        img.src = 'manha.jpg'
        formalidade.innerHTML = `Bom dia!`
        document.body.style.background = '#00FFFF'
    }else if(horas > 18){
        img.src = 'noite.jpg'
        formalidade.innerHTML = `Boa noite!`
        document.body.style.background = '#4682B4'
    }else{
        img.src = 'tarde.jpg'
        formalidade.innerHTML = `Boa tarde!`
        document.body.style.background = '#00BFFF'
    }
}