// Loop for em JavaScript
// ----------------------
// O loop for é uma estrutura de repetição muito utilizada para executar um bloco de código várias vezes.
// Ele é composto por três partes: inicialização, condição e incremento/decremento.

// Sintaxe básica:
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
// Saída: 0, 1, 2, 3, 4

// Explicação:
// - let i = 0      -> inicialização (executa uma vez no início)
// - i < 5          -> condição (enquanto for verdadeira, o loop continua)
// - i++            -> incremento (executa ao final de cada repetição)

// Percorrendo arrays com for:
let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída: Maçã, Banana, Laranja

// Loop for decrescente:
for (let i = 5; i > 0; i--) {
    console.log(i);
}
// Saída: 5, 4, 3, 2, 1

// Pulando de dois em dois:
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Saída: 0, 2, 4, 6, 8, 10

// Usando for...of para percorrer arrays (forma moderna):
for (let fruta of frutas) {
    console.log(fruta);
}
// Saída: Maçã, Banana, Laranja

// Usando for...in para percorrer propriedades de objetos:
let pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
// Saída: nome: João, idade: 30, cidade: São Paulo

// Resumindo:
// - O for tradicional é flexível e permite controlar o início, fim e passo da repetição.
// - for...of é ideal para percorrer arrays e coleções iteráveis.
// - for...in é usado para percorrer as propriedades de objetos.
