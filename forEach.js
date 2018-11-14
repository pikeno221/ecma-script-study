var nomes = ['gabriel', 'marcelo', 'jose'];

nomes.forEach(function (nome) {
  nomes.push('miguel');
  console.log(nome);
});

console.log('------------');


nomes.forEach(function (nome) {    // map
  console.log(nome);
});




var numeros = [1, 2, 3];

var dobro = [];

numeros.forEach(function(numero){
  dobro.push(numero*2);
  
});

console.log(dobro);

