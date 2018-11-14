var nomes = ['gabriel', 'marcelo', 'jose'];

nomes.forEach(function (nome) {
  nomes.push('miguel');
  console.log(nome);
});

console.log('------------');


nomes.forEach(function (nome) {
  console.log(nome);
});