'Testes' sendo feitos em:
https://repl.it/@pikeno221/QuirkySuspiciousExperiments


Exercicios:
Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.

var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar

R:

var numeros = [0,1,2,3,4,5];
numeros.forEach(function(numero){
        if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
});







Utilizando o método map, escreva o método dobrar que recebe um array de números 
inteiros e retorna um array com todos os valores do array original dobrados.

Exemplo: dobrar([1,2,3]) → [2,4,6]

R:

var numeros = [1, 2, 3];

var num = numeros.map(function(numero){
    return numero * 2;
});

console.log(numeros);


Escreva o método caps que recebe um array de strings e
 retorna um outro array com todas as strings do array original em CAIXA ALTA.

Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

R:

var caps = ['oi', 'tudo', 'bem?'];

capsLock = caps.map(function(cap) {
    return cap.toLocaleUpperCase();
});

console.log(caps);
console.log(capsLock);




Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que 
avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses 
esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve
 aceitar uma string e retornar um valor booleano (true ou false).

Exemplo: validaParenteses(')((()()())))'); → false
Exemplo: "()()()" → true
Exemplo: ")(" → false


R:

function validaParenteses(parenteses) {
  var arrayParenteses = parenteses.split(""); 
  var balanceado =  !arrayParenteses.reduce(function(soma, parentese) {
    if(soma < 0) { return soma } // para o caso de começar com ")"
    if(parentese ===  "(") { return ++soma }
    if(parentese ===  ")") { return --soma }
  }, 0);

  return balanceado;
}

var parenteses = '()()()((';

var valid = validaParenteses(parenteses);

console.log(valid);



Faça uma função chamada removeDuplicatas que recebe um 
array de números inteiros e remove todas as suas duplicadas.

Utilize as funções auxiliares: reduce e find.

Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]

var numeros = [1,2,3,3,4,5];

function removeDuplicatas(numeros) {
    return numeros.reduce(function(anterior, valor) {
        var achouDuplicata = anterior.find(function(valor2){
            return valor === valor2;
        });

        if (!achouDuplicata) {
            anterior.push(valor);
        }
        
        return anterior;

    }, []);
}

console.log(removeDuplicatas(numeros));


var letras = ['a', 'b', 'c', 'd', 'd', 'a'];


function removeDuplicadas(letras) {
    return letras.reduce(function(anterior, letraAtual){
        var duplicado = anterior.find(function(letraBuscada) {
        return letraAtual === letraBuscada;
    });

    if (!duplicado) {
        anterior.push(letraAtual);
    }
    return anterior;
    },[]);
}
            
 console.log(removeDuplicadas(letras));



Dada uma lista de objetos que contém o nome de 
um aluno e sua média final, crie o método 'aprovados' que recebe
 esta lista e retorna somente os alunos que foram aprovados.

Para isto, utilize o método filter.

var alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];

var reprovados = alunos.filter(function(aluno){
    return aluno.media <= 6.5;
})

var aprovados = alunos.filter(function(aluno){
    return aluno.media >= 6.5;
});

console.log(aprovados);




Crie uma função buscar que recebe três parâmetros:

propriedade: Nome da propriedade no objeto
valor: Valor da propriedade no objeto
lista: Lista de objetos onde a busca deve ser executada
Dado estes parâmetros, a função deve buscar na lista e retornar o registro
 que possui a propriedade com o valor especificado.

Utilize o método find.

var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]

function findByPropriety(propriedade, valor, list){
    return list.find(function(item) {
        return item[propriedade] === valor;
    });
}

console.log(findByPropriety('sobrenome', 'Ferreira', lista));





Crie uma função calculaAreaTotal que recebe um parâmetro:

dimensoes: objeto que possui as propriedades altura e comprimento
 que são números inteiros
A função deve retornar a soma de todas as áreas. Tome como base a entrada a seguir:

var dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]

function calc(dimensoes) {
    
}






mplemente uma função chamada calculaDistancia
 que recebe uma lista de objetos que representam ruas e faça a soma de seus tamanhos. 
 Cada objeto rua da lista possui as seguintes propriedades:

nome: String que representa o nome da rua
tamanho: Número intero que representa a comprimento da rua em metros
Utilize somente os conceitos que foram apresentados neste capítulo para
 iterar as ruas. Assuma que sempre haverá pelo menos uma rua no array.

Tome como exemplo, a entrada abaixo.

var ruas = [
  { nome:'Rua 1', tamanho: 2500 },
  { nome:'Rua 2', tamanho: 3400 },
  { nome:'Rua 3', tamanho: 1400 }
];
Exemplo: calculaDistancia(ruas) → 7300



var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];
function calculaDistancia(ruas) {
    var totalDistancia = 0
    var iterador = ruas[Symbol.iterator]();
    var done = false;
    var proximo = iterador.next();
    do {
        totalDistancia += proximo.value.tamanho;
        proximo = iterador.next();
    } while (!proximo.done)

    return totalDistancia;
}

console.log(calculaDistancia(ruas));




Desenvolva a função 'isListaVazia' que recebe como parâmetro uma 
lista de números inteiros qualquer e retorna o valor true 
caso esta lista não tenha nenhum item e false para os demais
 resultados. A lógica deve ser feita usando somente a propriedade 
 done do objeto que é obtido ao executar o next no iterador do array.


var numeros = [1, 2, 3, 4];

var iterator = numeros[Symbol.iterator]();
var proximo = iterator.next();

function isListaVazia(lista) {
    return lista[Symbol.iterator]().next().done;
  }




  Utilizando os aprendizados deste capítulo, implemente a função
   soletraPalavra que recebe como único
  parâmetro uma String e então exibe cada letra da String em uma linha do console.


  var palavra = 'teste';

  
  function soletraPalavra(palavra) {
    var iteradorPalavra = palavra[Symbol.iterator]();
    var letra = iteradorPalavra.next();
    do {
      console.log(letra.value);
      letra = iteradorPalavra.next();
    } while (!letra.done);
  }




  Crie o método 'criaIterador' que recebe como parâmetro uma lista 
  e então o devolve um objeto que possui o mesmo comportamento de um iterador,
   ou seja, que possui o método next que toda vez que invocado, retorna um objeto
    com as propriedades: value e done.


    
Exemplo: criaIterador([1,2]).next() → { value: 1, done: false }


function criaIterador(array) {
    var proximoIndice = 0;
 
     return {
        next: function() {
            if(proximoIndice < array.length) {
              return { value: array[proximoIndice++], done: false };
            } else {
              return { value: undefined, done: true };
            }
        }
     };
 
 }

