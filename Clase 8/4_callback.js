function devuelvo_usuario() {
    return 'Camilo';
}
function devuelvo_saludo() {
    return 'Hola';
}
function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvo_saludo, devuelvo_usuario);
console.log(resultado);



//        cb                   'pizza' (comida)
var devuelvo_frase = function (comida) {
    return 'Hoy Quiero Comer ' + comida
}

//                    'pizza', devuelvo_frase
var hablar = function (comida, cb) {
    return cb(comida)
}

var frase_final = hablar('pizza', devuelvo_frase)
console.log(frase_final)