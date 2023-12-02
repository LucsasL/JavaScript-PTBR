function carregar() {
    var msg = window.document.querySelector('p#msg')
    var img = window.document.querySelector('img#foto')
    var data = new Date()
    var horas = data.getHours()

    msg.innerHTML = `Agora são ${horas} hora`
    if (horas >= 6 && horas < 12) {
        // BOM DIA!
        img.src = '../imagens/manha.png'
        window.document.body.style.background = 'rgb(126, 182, 255)'
    } else if (horas >= 12 && horas <= 18) {
        // BOA TARDE!
        img.src = '../imagens/tarde.png'
        window.document.body.style.background = 'rgb(255, 200, 123)'
    } else {
        // BOA NOITE!
        img.src = '../imagens/noite.png'
        window.document.body.style.background = 'rgb(38, 36, 78)'
    }
}