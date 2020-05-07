// Creare in HTML una griglia di 5x5 quadrati vuoti --- ok.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

//aprire un array per i numeri random (25):
var arrayRandom = [];
//ciclo che gira 25 volte per generare 25 numeri random
do {
    var numeroRandom = generaRandom(0, 10);
    arrayRandom.push(numeroRandom);
} while (arrayRandom.length < 25);

console.log(arrayRandom);

//estraggo i numeri dell'arrayRandom
var numeroQuadrato = arrayRandom[numeroRandom];

$('.quadrato').one('click', function(){
    var posizione = $(this).index();
    console.log(posizione);
    var numeroQuadrato = $(this).eq(posizione);
    console.log(numeroQuadrato);
    $(this).append(posizione).text();
});


function generaRandom(min, max) {
    return Math.floor(Math.random () * (max - min) + min);
}
