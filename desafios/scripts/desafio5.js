var numeros = []

var media = 0

var teste = 10

function AdicionandoNum() {
    let num = document.querySelector('input#idnum').value

    if (num.length == 0) {
        window.alert(`[ERRO] Adicione um valor antes de continuar.`)

    } else if (num > 100 || num <= 0) {
        window.alert(`[ERRO] O valor adicionado não condiz com a proposta mencionada.`)
        
    } else {
        if (num != numeros) {
            numeros.push(num)
            let res = document.createElement('option')
            let optTxt = document.createTextNode(`Valor ${num} adicionado`)

            media += num

            if (c == 0) {
                var maior = num
                var menor = num

            }

            if (num > maior) {
                maior = num
            }

            if (num < menor) {
                menor = num
            }

        } else {
            window.alert('[ERRO] Valor repetido.')
        }
    }
}

function Analisar() {
    if (numeros.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar.')
    }

    media /= numeros.length

    let saida = document.querySelector('output#saida')

    saida.innerHTML += `<p>Ao todo, Foram adicionados ${numeros.length} valores ao Array.</p>`
    saida.innerHTML = `<p>O maior valor informado foi o ${maior}.</p>`
    saida.innerHTML = `<p>O menor valor informado foi o ${menor}.</p>`
    saida.innerHTML = `<p>Somando todos os valores temos ${soma}.</p>`
    saida.innerHTML = `<p>A média de todos os valores digitados é ${media}</p>`
}