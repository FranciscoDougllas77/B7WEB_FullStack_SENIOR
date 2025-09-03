// Métodos de Numbers em JavaScript

// 1. toFixed()
// Retorna uma string representando o número com um número fixo de casas decimais.
let numero1 = 10.56789;
console.log(numero1.toFixed(2)); // "10.57"

// 2. toString()
// Converte o número para uma string.
let numero2 = 123;
console.log(numero2.toString()); // "123"

// 3. parseInt()
// Converte uma string para um número inteiro.
let texto1 = "45.78";
console.log(parseInt(texto1)); // 45

// 4. parseFloat()
// Converte uma string para um número de ponto flutuante.
let texto2 = "45.78";
console.log(parseFloat(texto2)); // 45.78

// 5. isNaN()
// Verifica se o valor não é um número (NaN).
let valor1 = "abc";
console.log(isNaN(valor1)); // true

// 6. Number.isInteger()
// Verifica se o valor é um número inteiro.
let valor2 = 10.5;
console.log(Number.isInteger(valor2)); // false

// 7. Number()
// Converte diferentes tipos de valores para número.
let valor3 = "123";
console.log(Number(valor3)); // 123

// 8. toExponential()
// Retorna uma string representando o número em notação exponencial.
let numero3 = 12345;
console.log(numero3.toExponential(2)); // "1.23e+4"

// 9. toPrecision()
// Retorna uma string representando o número com uma precisão específica.
let numero4 = 12.3456;
console.log(numero4.toPrecision(4)); // "12.35"

// 10. valueOf()
// Retorna o valor primitivo de um objeto Number.
let numero5 = new Number(50);
console.log(numero5.valueOf()); // 50

// Esses são alguns dos principais métodos de Numbers em JavaScript, úteis para manipulação e conversão de valores numéricos.
