function Tabuada() {
    let num = document.querySelector('input#idnum')
    let tabarea = document.querySelector('select#idtab')

    let n = Number(num.value)

    if (num.length == 0) {
        window.alert('[ERRO] Preencha os dados antes de continuar!')
        
    } else {
        tabarea.innerHTML = ''

        for (let c = 1 ; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tabarea.appendChild(item)
        }
    }
}