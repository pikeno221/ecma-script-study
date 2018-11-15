console.log('some! - valida se ao menos um item do array respeita a condição');

var jogos = [
  {nome: 'Mario Kart', categoria: 'corrida'},
  {nome: 'Mario Princess', categoria: 'aventura'},
  {nome: '007 - Contra GN', categoria: 'ação'},
  {nome: 'Internetional Super Star Soccer', categoria: 'sport'},
  {nome: 'Formula 1', categoria: 'corrida'},
  {nome: 'Formula 1', categoria: 'sport'}

];



var jogo = jogos.some(function(jg){
    return jg.categoria === 'corrida';
});


console.log(jogo);



console.log('-------------------------');


console.log('reduce! - somar todos os valores do array');

var numeros = [1, 2, 3, 4, 5];

var soma = 0

numeros.forEach(function(numero){
    soma += numero;
});

console.log(soma);


numeros.map(function(numero){
    
})

soma = numeros.reduce(function(numero){
  
})
