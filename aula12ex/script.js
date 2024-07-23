function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('time-imagem')
    var link = window.document.getElementById('eu')
    var data = new Date()
    var hora = data.getHours(); 
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    msg.innerHTML = `${hora}:${minutos}:${segundos}`
    setInterval(carregar, 1000);


    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E2D1B4'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F1E071'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#091918'
        link.style.color = '#FFFFFF'
    }
}