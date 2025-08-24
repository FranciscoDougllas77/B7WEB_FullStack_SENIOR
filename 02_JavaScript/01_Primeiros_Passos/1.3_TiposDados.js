// Tipos de Dados em JavaScript

// 1. String - Texto
let nome = "Ana";
console.log(typeof nome); // string

// 2. Number - Número (inteiro ou decimal)
let idade = 28;
let altura = 1.65;
console.log(typeof idade);  // number
console.log(typeof altura); // number

// 3. Boolean - Verdadeiro ou Falso
let aprovado = true;
let reprovado = false;
console.log(typeof aprovado); // boolean

// 4. Undefined - Valor não definido
let endereco;
console.log(typeof endereco); // undefined

// 5. Null - Ausência de valor
let salario = null;
console.log(typeof salario); // object (isso é uma peculiaridade do JavaScript)

// 6. Object - Estrutura para armazenar múltiplos valores
let pessoa = {
  nome: "Carlos",
  idade: 32
};
console.log(typeof pessoa); // object

// 7. Array - Lista de valores (também é um tipo de objeto)
let frutas = ["maçã", "banana", "uva"];
console.log(typeof frutas); // object

// 8. Function - Função
function somar(a, b) {
  return a + b;
}
console.log(typeof somar); // function

// Dica: Use typeof para descobrir o tipo de dado de uma variável.
console.log(typeof 123);        // number
console.log(typeof "texto");    // string
console.log(typeof false);      // boolean
