// Arrow Function (Função de seta) em JavaScript
// ----------------------------------------------
// Arrow functions são uma forma mais curta de escrever funções em JavaScript.
// Elas são muito utilizadas por sua sintaxe concisa e por não alterarem o valor de 'this'.

// Sintaxe básica:
// const nomeFuncao = (param1, param2, ...) => { corpo da função };

// Exemplo 1: Função que soma dois números
const somar = (a, b) => {
    return a + b;
};
console.log(somar(2, 3)); // Saída: 5

// Exemplo 2: Quando a função tem apenas uma linha, o 'return' é implícito
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // Saída: 20

// Exemplo 3: Se houver apenas um parâmetro, os parênteses são opcionais
const dobrar = n => n * 2;
console.log(dobrar(6)); // Saída: 12

// Exemplo 4: Arrow function sem parâmetros precisa dos parênteses
const saudacao = () => "Olá, mundo!";
console.log(saudacao()); // Saída: Olá, mundo!

// Observação importante:
// Arrow functions NÃO possuem seu próprio 'this'. 
// Isso é útil em alguns casos, como em callbacks, mas pode ser uma limitação em outros.

// Exemplo 5: Usando arrow function em arrays
const numeros = [1, 2, 3, 4];
const quadrados = numeros.map(numero => numero * numero);
console.log(quadrados); // Saída: [1, 4, 9, 16]

// Resumindo:
// - Sintaxe curta e moderna para funções
// - Não possuem 'this' próprio
// - Ideais para funções rápidas e callbacks
