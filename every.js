console.log('every! - valida se todos os itens do array respeita a condição');

var jogos = [
  {nome: 'Mario Kart', categoria: 'corrida'},
//  {nome: 'Mario Princess', categoria: 'aventura'},
//  {nome: '007 - Contra GN', categoria: 'ação'},
//  {nome: 'Internetional Super Star Soccer', categoria: 'sport'},
  {nome: 'Formula 1', categoria: 'corrida'},
 // {nome: 'Formula 1', categoria: 'sport'}

];



var jogo = jogos.every(function(jg){
    return jg.categoria === 'corrida';
});


console.log(jogo);