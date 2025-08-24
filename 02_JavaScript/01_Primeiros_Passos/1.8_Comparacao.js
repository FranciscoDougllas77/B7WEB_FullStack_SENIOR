// Operadores de Comparação, Relacionais e Lógicos em JavaScript

// 1. Operadores de Comparação
// Usados para comparar dois valores e retornar true (verdadeiro) ou false (falso).

// Igualdade (==) - compara apenas o valor
console.log(5 == "5"); // true

// Igualdade estrita (===) - compara valor e tipo
console.log(5 === "5"); // false

// Diferença (!=) - compara apenas o valor
console.log(10 != "10"); // false

// Diferença estrita (!==) - compara valor e tipo
console.log(10 !== "10"); // true

// 2. Operadores Relacionais
// Usados para comparar valores numéricos ou de ordem.

// Maior que (>)
console.log(8 > 5); // true

// Menor que (<)
console.log(3 < 7); // true

// Maior ou igual (>=)
console.log(6 >= 6); // true

// Menor ou igual (<=)
console.log(4 <= 2); // false

// 3. Operadores Lógicos
// Usados para combinar condições.

// E lógico (&&) - retorna true se ambas as condições forem verdadeiras
console.log(5 > 2 && 10 < 20); // true

// OU lógico (||) - retorna true se pelo menos uma condição for verdadeira
console.log(5 > 10 || 10 < 20); // true

// NÃO lógico (!) - inverte o valor lógico
console.log(!(5 > 2)); // false

// Exemplos práticos:
let idade = 20;
let temCarteira = true;

// Verifica se a pessoa pode dirigir
let podeDirigir = idade >= 18 && temCarteira;
console.log("Pode dirigir?", podeDirigir); // true

// Resumindo:
// - Operadores de comparação verificam igualdade ou diferença entre valores.
// - Operadores relacionais comparam grandezas (maior, menor, etc).
// - Operadores lógicos combinam condições para decisões mais complexas.
