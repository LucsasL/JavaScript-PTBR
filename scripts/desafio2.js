var txtval = window.document.querySelector('input#idanoNasc')
var idade = Number(txtval.value)
var res = 'teste'

if (idade < 20) {
    res.innerHTML = `<p>Detectamos </p>`
} else if (idade < 50) {

} else {

}