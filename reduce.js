
console.log('reduce! - somar todos os valores do array');

var numeros = [1, 2, 3, 4, 5];

var soma = 0;


var soma = numeros.reduce(function(somaAux, numero) {
    return somaAux + numero;
  }, 0);
  
  
  console.log(soma);