console.log('For Each!');
var alunos = [ 
  {nome:'joão', idade:15},
  {nome:'josé', idade:18},
  {nome:'maria', idade:17}
];

var alunosDeMaior = [];

alunos.forEach(function(aluno){
  if (aluno.idade >= 18) {
    alunosDeMaior.push(aluno);
  }
});

console.log(alunosDeMaior);

console.log('-------------------------');


console.log('map ! - retorno entidade ');

var alunosDeMaior = alunos.map(function(aluno){
    if (aluno.idade >= 18) {
      return aluno;
    }
});

console.log(alunosDeMaior);


console.log('-------------------------');


console.log('filter ! - retorno um boolean');

var alunosDeMaior = alunos.filter(function(aluno){
    return aluno.idade >= 18;  
});

console.log(alunosDeMaior);

console.log('-------------------------');

