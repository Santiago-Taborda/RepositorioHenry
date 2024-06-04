var objeto = {
    drones: ['Dead Dnside', 'Psycho', 'Mercy'],
    simulation_theory: ['Algorithm', 'The Dark Side', 'Pressure']
}

var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios: { esProgramador: true }
}

console.log(persona.edad)

persona.nombre = 'Martin'
console.log(persona.nombre)

persona.edad = 32
console.log(persona.edad)


objeto.wotp = ['Will of the People', 'compliance', 'Liberation']
delete objeto.drones
console.log(objeto)


var funciones = {
    saludar: function () {
        console.log('Hola!')
    }
}

funciones.saludar()