function verificar() {
    var txtval = window.document.querySelector('input#idanoNasc')
    var anoNasc = Number(txtval.value)

    var agora = new Date()
    var atual = agora.getFullYear()
    var res = document.querySelector('div#res')

    if (anoNasc == 0 || anoNasc > atual || anoNasc < 1918) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')

    } else {
        var txtsexo = window.document.getElementsByName('sexo')
        var idade = Number(atual - anoNasc)

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (txtsexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 10) { // Criança
                img.setAttribute('src', '../../imagens/crianca-m.png')

            } else if (idade <= 20) { // Jovem
                img.setAttribute('src', '../../imagens/jovem-m.png')

            } else if (idade < 50) { // Adulto
                img.setAttribute('src', '../../imagens/adulto-m.png')

            } else { // Idoso
                img.setAttribute('src', '../../imagens/idoso-m.png')

            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10) { // Criança
                img.setAttribute('src', '../../imagens/crianca-f.png')

            } else if (idade <= 20) { // Jovem
                img.setAttribute('src', '../../imagens/jovem-f.png')

            } else if (idade < 50) { // Adulto
                img.setAttribute('src', '../../imagens/adulta-f.png')

            } else { // Idoso
                img.setAttribute('src', '../../imagens/idosa-f.png')

            }
        }

        var res = document.getElementById('res')
        res.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}