var libro = {
    autor: 'Borges',
    genero: 'Policial',
    año: 1990
}

var tiene_propiedad = libro.hasOwnProperty('nombre');
console.log(tiene_propiedad)

var tiene_propiedad = libro.hasOwnProperty('autor');
console.log(tiene_propiedad)


var todas_las_propiedades = Object.keys(libro);
console.log(todas_las_propiedades)


var mundo = {
    continentes: 7,
    paises: 195,
    oceanos: 5
}

for (let prop in mundo) {
    console.log('Esta es la propiedad:', prop, ' /  Este es el valor:', mundo[prop]);
}


var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function () {
        console.log('Mi perro es un ' + this.raza);
    },
}

mascota.info()