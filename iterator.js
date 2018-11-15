

var casas = ['Grifinória', 'Sonserina', 'Cornival', 'Lufa-Lufa'];
var bruxos = ['Janine', 'Priscila', 'Andre', 'Felipe'];

bruxos.forEach(function(bruxo) {
    var casa = casas[Math.floor(Math.random() * casas.length)];
    console.log("Bruxo: " + "| Casa " + casa);
});






var chapeuSeletor = function(bruxo) {
    var casas = ['Grifinória', 'Sonserina', 'Cornival', 'Lufa-Lufa'];
    var casa = casas[Math.floor(Math.random() * casas.length)];

    console.log("Bruxo: " + "| Casa " + casa);

}


var bruxos = ['Janine', 'Priscila', 'Andre', 'Felipe'];

var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();
do {
    var bruxo = proximo.value;
    chapeuSeletor(bruxo);
     done = proximo.done;
} while (done === false);

