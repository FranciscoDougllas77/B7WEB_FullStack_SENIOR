// Variáveis em JavaScript são usadas para armazenar valores que podem ser utilizados e modificados ao longo do código.

// Existem três formas principais de declarar variáveis:
// var - Forma mais antiga, permite redeclaração e tem escopo de função.
// let - Mais moderna, permite alteração do valor, mas não redeclaração no mesmo escopo. Tem escopo de bloco.
// const - Para valores constantes, não permite alteração nem redeclaração. Tem escopo de bloco.

// Exemplos:

var nome = "João"; // Pode ser alterado e redeclarado
let idade = 25;    // Pode ser alterado, mas não redeclarado no mesmo escopo
const pais = "Brasil"; // Não pode ser alterado

// Alterando valores:
nome = "Maria"; // Ok
idade = 30;     // Ok
// pais = "Argentina"; // Erro! Não pode alterar uma constante

console.log(nome);  // Maria
console.log(idade); // 30
console.log(pais);  // Brasil

// Dica: Prefira usar let e const para evitar problemas de escopo e bugs no código.
