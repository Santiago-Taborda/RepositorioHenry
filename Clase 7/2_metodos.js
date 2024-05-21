var origin_of_symmetry = ['Bliss', 'Space Dementia', 'Hyper Music']
origin_of_symmetry.push('Futurism')
origin_of_symmetry.unshift('New Born')
console.log(origin_of_symmetry)

//origin_of_symmetry.pop()
//origin_of_symmetry.shift()
console.log(origin_of_symmetry)

console.log(origin_of_symmetry.includes('Bliss'))
console.log(origin_of_symmetry.includes('Megalomania'))

var numeros = [5, 2, 8, 4, 9, 1]
var mayor5 = numeros.every((num) => {
    return num > 5
})
console.log(mayor5)


var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop()
palabraSeparada.push('y')
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);


origin_of_symmetry.forEach((track) => console.log(track))
origin_of_symmetry.forEach(track => {
    if (track === 'Bliss') {
        console.log(track)
    }
})

var remastered = origin_of_symmetry.map((pista) => {
    return pista + ' (Remastered)'
})
console.log(remastered)