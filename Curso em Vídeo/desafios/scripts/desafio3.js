function contar() {
    // Pega o valor dos inputs no HTML e passa para uma variável
    let inicio = window.document.querySelector('input#idinicio')
    let fim = window.document.querySelector('input#idfim')
    let passo = window.document.querySelector('input#idpasso')
    let res = document.querySelector('output#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Não é possível fazer contagem sem ter todos os dados!')

    } else {
        res.innerHTML = '<p>Contando:</p>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('[ERRO] Passo inválido!')
        }

        if (i > f) { // Contagem regressiva
            for (let c = i ; c >= f ; c -= p) {
                res.innerHTML += `<span>${c} &#128073;</span>`

            }

        } else { // Contagem progressiva
            for (let c = i; c <= f ; c += p) {
                res.innerHTML += `<span>${c} &#128073;</span>`
    
            }
    
        }
        
        res.innerHTML += '&#127937;'
    }
}