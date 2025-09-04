// Operador Spread (...)
// O operador spread, representado por três pontos (...), permite "espalhar" os elementos de um array ou as propriedades de um objeto em outro array ou objeto. 
// Ele é muito útil para copiar, combinar ou passar elementos de forma mais simples e legível.

// Exemplo com arrays:
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// Juntando dois arrays usando spread:
const todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros); // [1, 2, 3, 4, 5, 6]

// Copiando um array:
const copiaNumeros = [...numeros1];
console.log(copiaNumeros); // [1, 2, 3]

// Exemplo com objetos:
const pessoa = { nome: 'Maria', idade: 30 };
const contato = { telefone: '9999-9999', email: 'maria@email.com' };

// Juntando objetos usando spread:
const pessoaCompleta = { ...pessoa, ...contato };
console.log(pessoaCompleta);
// { nome: 'Maria', idade: 30, telefone: '9999-9999', email: 'maria@email.com' }

// Também pode ser usado para passar elementos de um array como argumentos de uma função:
function somar(a, b, c) {
    return a + b + c;
}
const valores = [10, 20, 30];
console.log(somar(...valores)); // 60

// Resumindo:
// - O spread "espalha" elementos de arrays ou propriedades de objetos.
// - Facilita a cópia, combinação e passagem de dados de forma simples e moderna.
