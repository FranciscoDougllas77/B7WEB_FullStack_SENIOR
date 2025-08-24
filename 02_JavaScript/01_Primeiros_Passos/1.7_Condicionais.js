// Condicionais em JavaScript

// Condicionais são estruturas que permitem executar diferentes blocos de código
// dependendo de uma condição (verdadeira ou falsa).

// A estrutura mais comum é o if, else if e else:

let idade = 18;

if (idade >= 18) {
  // Se a condição for verdadeira, este bloco será executado
  console.log("Você é maior de idade.");
} else {
  // Se a condição for falsa, este bloco será executado
  console.log("Você é menor de idade.");
}

// Também é possível usar else if para testar várias condições:

let nota = 7;

if (nota >= 7) {
  console.log("Aprovado!");
} else if (nota >= 5) {
  console.log("Recuperação.");
} else {
  console.log("Reprovado.");
}

// Outra forma de condicional é o operador ternário, que é uma forma resumida do if/else:

let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// Dica: Sempre use condicionais para tomar decisões no seu código!
