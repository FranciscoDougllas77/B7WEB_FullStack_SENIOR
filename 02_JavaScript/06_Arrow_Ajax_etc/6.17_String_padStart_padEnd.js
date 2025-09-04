// Métodos padStart() e padEnd() em String

// Em JavaScript, strings possuem métodos para preencher seu conteúdo até atingir um determinado comprimento:
// - padStart(tamanho, preenchimento): adiciona caracteres no início da string até atingir o tamanho desejado.
// - padEnd(tamanho, preenchimento): adiciona caracteres no final da string até atingir o tamanho desejado.

// Exemplos de uso:

const codigo = '7';
console.log(codigo.padStart(3, '0')); // '007'
// Adiciona zeros à esquerda até a string ter 3 caracteres

const numero = '42';
console.log(numero.padStart(5, '*')); // '***42'
// Adiciona asteriscos à esquerda até a string ter 5 caracteres

const nome = 'Ana';
console.log(nome.padEnd(8, '.')); // 'Ana.....'
// Adiciona pontos à direita até a string ter 8 caracteres

// Se o preenchimento ultrapassar o tamanho necessário, ele é cortado:
console.log('abc'.padEnd(6, '123')); // 'abc123'

// Se o tamanho for menor ou igual ao comprimento da string, nada é adicionado:
console.log('JavaScript'.padStart(5, '-')); // 'JavaScript'

// Resumindo:
// - padStart() preenche a string no início (à esquerda).
// - padEnd() preenche a string no final (à direita).
// - Útil para formatação de números, códigos, tabelas, etc.
