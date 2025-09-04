// Métodos includes() e repeat()

// includes()
// O método includes() verifica se um array ou string contém um determinado elemento ou substring.
// Retorna true se encontrar, ou false caso contrário.

// Exemplo com array:
const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas.includes('banana')); // true
console.log(frutas.includes('uva'));    // false

// Exemplo com string:
const frase = 'JavaScript é incrível!';
console.log(frase.includes('Script')); // true
console.log(frase.includes('Python')); // false

// repeat()
// O método repeat() retorna uma nova string com um determinado número de cópias concatenadas da string original.

// Exemplo:
const risada = 'ha';
console.log(risada.repeat(3)); // 'hahaha'

// Outro exemplo:
const separador = '-';
console.log(separador.repeat(10)); // '----------'

// Resumindo:
// - includes() serve para verificar se um valor existe em um array ou string.
// - repeat() serve para repetir uma string várias vezes, gerando uma nova string.
