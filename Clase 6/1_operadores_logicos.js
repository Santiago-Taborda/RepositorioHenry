function mayor_menor_y_par(num) {
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false)
}

mayor_menor_y_par(3)
mayor_menor_y_par(7)
mayor_menor_y_par(8)
mayor_menor_y_par(11)


function operador_or(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false)
}

operador_or('Henry')
operador_or('a')
operador_or('uno')


function negacion(permiso) {
    if (permiso !== true) console.log('Tiene Permiso');
}

negacion(false)


function condicion_compleja(num) {
    if (num > 9 && num % 2 == 0 || num == 3) console.log(true);
    else console.log(false)
}

condicion_compleja(3)
condicion_compleja(10)
condicion_compleja(15)
condicion_compleja(6)