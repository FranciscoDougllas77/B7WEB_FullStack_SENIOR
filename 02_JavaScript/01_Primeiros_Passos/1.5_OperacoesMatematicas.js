// Operações Matemáticas em JavaScript

// Em JavaScript, podemos realizar operações matemáticas básicas usando operadores aritméticos.

// 1. Adição (+)
let soma = 10 + 5; // 15

// 2. Subtração (-)
let subtracao = 10 - 5; // 5

// 3. Multiplicação (*)
let multiplicacao = 10 * 5; // 50

// 4. Divisão (/)
let divisao = 10 / 2; // 5

// 5. Módulo (%) - Resto da divisão
let resto = 10 % 3; // 1

// 6. Exponenciação (**)
let potencia = 2 ** 3; // 8

// Também é possível incrementar ou decrementar valores:
// Incremento (++)
let numero = 1;
numero++; // Agora numero vale 2

// Decremento (--)
numero--; // Agora numero vale 1

// Podemos usar funções matemáticas da biblioteca Math:
let raizQuadrada = Math.sqrt(16); // 4
let valorAbsoluto = Math.abs(-20); // 20
let arredondar = Math.round(4.7); // 5

// Exemplos de uso:
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Potência:", potencia);
console.log("Raiz quadrada de 16:", raizQuadrada);
console.log("Valor absoluto de -20:", valorAbsoluto);
console.log("Arredondando 4.7:", arredondar);

// Dica: Use parênteses para definir a ordem das operações quando necessário.
let resultado = (2 + 3) * 4; // 20
console.log("Resultado com parênteses:", resultado);
