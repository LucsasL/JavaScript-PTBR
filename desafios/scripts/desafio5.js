let saida = document.querySelector('output#saida')
let numeros = []
let media = 0

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
        
    }
}

function AdicionandoNum() {
    let num = document.querySelector('input#idnum')

    if (num.value.length == 0) {
        window.alert(`[ERRO] Adicione um valor antes de continuar.`)

    } else if (num.value > 100 || num.value <= 0) {
        window.alert(`[ERRO] O valor adicionado não condiz com a proposta mencionada.`)
        
    } else if (!inLista(num.value, numeros)) {
        numeros.push(num.value)

        let mostra = document.querySelector('select#idvalores')
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        mostra.appendChild(item)
        saida.innerHTML = ''

    } else {
        window.alert('[ERRO] Valor repetido.')
    }

    num.value = ''
    num.focus()
}

function Analisar() {
    if (numeros.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar.')
    }

    let maior = Number(numeros[0])
    let menor = Number(numeros[0])
    let soma = Number(0)

    for (let c in numeros) {
        soma += Number(numeros[c])

        if (numeros[c] > maior) {
            maior = c
        }
        if (numeros[c] < menor) {
            menor = c
        }
    }
    media = soma / numeros.length

    saida.innerHTML = ''
    saida.innerHTML += `<p>Ao todo, Foram adicionados ${numeros.length} valores ao Array.</p>`
    saida.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`
    saida.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
    saida.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    saida.innerHTML += `<p>A média de todos os valores digitados é ${media}</p>`
}