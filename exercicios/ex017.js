var vetor = [5, 9, 2, 7, 3, 6, 8, 2]

/*
for (var c = 0 ; c < vetor.length ; c++) {
    console.log(`A posição ${c} tem o valor ${vetor[c]}.`)
}
*/

for (var c in vetor) {
    console.log(`A posição ${c} tem o valor ${vetor[c]}.`)
}