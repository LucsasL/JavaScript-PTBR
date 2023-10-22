function contar() {
    // Pega o valor do primeiro input no HTML e passa para uma variável
    var txtInp1 = window.document.querySelector('input#idinicio')
    var inicio = txtInp1.value

    // Pega o valor do segundo input no HTML e passa para uma variável
    var txtInp2 = window.document.querySelector('input#idfim')
    var fim = txtInp2.value

    // Pega o valor do terceiro input no HTML e passa para uma variável
    var txtInp3 = window.document.querySelector('input#idpasso')
    var passo = txtInp3.value

    // Declara variável para saída de dados
    var res = document.querySelector('output#res')

    // Adiciona parágrafos com dados manipulados
    res.innerHTML = '<p>Contando:</p>'
    res.innerHTML = `<p>${inicio} &#128073;</p>`

    // Escreve valores manipulados após manipulação de dados
    for (var c = inicio; c <= fim ; c += passo) {
        if (c < fim) {
            res.innerHTML = `<p>${c} &#128073;</p>`
            
        } else {
            res.innerHTML = `<p>${c} &#127937;</p>`

        }

    }
}