function fatorial(x) { // 5! = 5 x 4 x 3 x 2 x 1 = 120
    var res = x
    for (var c = 1 ; c < x ; c++) {
        res *= c
    }

    return res
}

console.log(fatorial(5))