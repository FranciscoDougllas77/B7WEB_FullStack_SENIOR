// Arrays em JavaScript
// --------------------
// Um array é uma estrutura que permite armazenar vários valores em uma única variável.
// Os valores podem ser de qualquer tipo: números, strings, objetos, etc.

// Como criar um array:
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas); // Saída: ["Maçã", "Banana", "Laranja"]

// Acessando elementos do array (os índices começam em 0):
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[2]); // Saída: Laranja

// Modificando um elemento do array:
frutas[1] = "Uva";
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

// Operações básicas com arrays:

// 1. Adicionar elemento ao final: push()
frutas.push("Abacaxi");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Abacaxi"]

// 2. Remover o último elemento: pop()
frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

// 3. Adicionar elemento no início: unshift()
frutas.unshift("Melancia");
console.log(frutas); // Saída: ["Melancia", "Maçã", "Uva", "Laranja"]

// 4. Remover o primeiro elemento: shift()
frutas.shift();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

// 5. Saber o tamanho do array: length
console.log(frutas.length); // Saída: 3

// 6. Percorrer um array com for
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 7. Percorrer um array com forEach
frutas.forEach(function(fruta) {
    console.log(fruta);
});

// Resumindo:
// - Arrays armazenam vários valores em uma variável só
// - Permitem acessar, modificar, adicionar e remover elementos facilmente
// - São muito usados para listas de dados em JavaScript
