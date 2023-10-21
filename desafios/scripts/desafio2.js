function verificar() {
    var txtval = window.document.querySelector('input#idanoNasc')
    var anoNasc = Number(txtval.value)

    var agora = new Date()
    var atual = agora.getFullYear()
    var res = document.querySelector('div#res')

    if (anoNasc == 0 || anoNasc > atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')

    } else {
        var txtsexo = window.document.getElementsByName('sexo')
        var idade = agora - Number(atual.value)

        var genero = ''

        if (txtsexo[0].checked) {
            genero = 'Homem'

        } else {
            genero = 'Mulher'

        }
        res.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p>`
    }

    var res = document.getElementById('res')

    var idade = Number(atual - anoNasc)
}