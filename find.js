console.log('find! - acha apenas um resultado');
var alunos = [ 
  {nome:'joão', idade:15},
  {nome:'josé', idade:18},
  {nome:'maria', idade:17}
];

var alunoProcurado = alunos.find(function(aluno){
    return aluno.nome === 'maria';
});


console.log(alunoProcurado);

