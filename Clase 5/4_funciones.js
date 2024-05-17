function masTres(x) {
    console.log(x + 3);
}

masTres(5)

//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
}

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

//Precedencia de valores
function otraFuncion() {
    return ("el nombre retornado de la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('santy')
    );
}

//Función: cuidadoConElReturn
function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}