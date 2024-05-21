var the_2nd_law = ['Supremacy', 'Madness', 'Panic Station', 'Prelude', 'Survival', 'Follow Me']

for (var i = 0; i < the_2nd_law.length; i++) {
    console.log(the_2nd_law[i]);
}


function encontrar_s (string) {
    var letras = string.split('');
    for(let i = 0; i < letras.length; i++) {
        if (letras[i] === 's') console.log(string)
    }
}

encontrar_s('Madness')
encontrar_s('Follow Me')


var arr = []

while (arr.length > 5) {
    arr.push('Boom!')
}