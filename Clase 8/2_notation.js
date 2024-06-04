// Dot-Notation
var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes']
};
console.log(atuendos.manos)

// Bracket-Notation
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


var comidas = {}
var diferencias = function (uno, dos) {
    comidas.uno = ['Frutas', 'Vegetales']
    comidas[dos] = ['Hamburguesa', 'Papas Fritas']
}

diferencias('saludable', 'no_saludable')
console.log(comidas)