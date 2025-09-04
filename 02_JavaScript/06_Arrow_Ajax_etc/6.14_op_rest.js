// Operador Rest (...)
// O operador rest, representado por três pontos (...), permite que uma função receba um número indefinido de argumentos como um array.
// Ele é muito útil quando não sabemos quantos parâmetros serão passados para a função ou quando queremos capturar o "resto" dos elementos de um array ou objeto.

// Exemplo com funções:
function somar(...numeros) {
    // 'numeros' será um array contendo todos os argumentos passados
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somar(1, 2)); // 3
console.log(somar(1, 2, 3, 4)); // 10

// Exemplo com destructuring de arrays:
const [primeiro, segundo, ...outros] = [10, 20, 30, 40, 50];
console.log(primeiro); // 10
console.log(segundo); // 20
console.log(outros); // [30, 40, 50]

// Exemplo com destructuring de objetos:
const pessoa = { nome: 'Ana', idade: 25, cidade: 'São Paulo', profissao: 'Dev' };
const { nome, ...resto } = pessoa;
console.log(nome); // 'Ana'
console.log(resto); // { idade: 25, cidade: 'São Paulo', profissao: 'Dev' }

// Resumindo:
// - O operador rest agrupa múltiplos elementos em um array ou objeto.
// - Muito útil em funções com número variável de argumentos e em destructuring para capturar o restante dos dados.
