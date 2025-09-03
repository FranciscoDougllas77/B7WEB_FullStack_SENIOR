// Métodos de Arrays em JavaScript

// 1. push()
// Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
let frutas = ['maçã', 'banana'];
frutas.push('laranja');
console.log(frutas); // ['maçã', 'banana', 'laranja']

// 2. pop()
// Remove o último elemento do array e o retorna.
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // 'laranja'
console.log(frutas); // ['maçã', 'banana']

// 3. shift()
// Remove o primeiro elemento do array e o retorna.
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // 'maçã'
console.log(frutas); // ['banana']

// 4. unshift()
// Adiciona um ou mais elementos no início do array e retorna o novo comprimento do array.
frutas.unshift('uva', 'melancia');
console.log(frutas); // ['uva', 'melancia', 'banana']

// 5. concat()
// Junta dois ou mais arrays e retorna um novo array.
let legumes = ['cenoura', 'batata'];
let alimentos = frutas.concat(legumes);
console.log(alimentos); // ['uva', 'melancia', 'banana', 'cenoura', 'batata']

// 6. join()
// Junta todos os elementos do array em uma string, separados por um separador especificado.
let texto = alimentos.join(', ');
console.log(texto); // 'uva, melancia, banana, cenoura, batata'

// 7. slice()
// Retorna uma cópia de parte do array, sem modificar o array original.
let algumasFrutas = alimentos.slice(1, 3);
console.log(algumasFrutas); // ['melancia', 'banana']

// 8. splice()
// Altera o conteúdo do array, removendo, substituindo ou adicionando elementos.
alimentos.splice(2, 1, 'abacaxi'); // Remove 1 elemento na posição 2 e adiciona 'abacaxi'
console.log(alimentos); // ['uva', 'melancia', 'abacaxi', 'cenoura', 'batata']

// 9. forEach()
// Executa uma função para cada elemento do array.
alimentos.forEach(function(item, indice) {
    console.log(indice + ': ' + item);
});
// Saída:
// 0: uva
// 1: melancia
// 2: abacaxi
// 3: cenoura
// 4: batata

// 10. map()
// Cria um novo array com o resultado da função aplicada a cada elemento.
let alimentosMaiusculo = alimentos.map(function(item) {
    return item.toUpperCase();
});
console.log(alimentosMaiusculo); // ['UVA', 'MELANCIA', 'ABACAXI', 'CENOURA', 'BATATA']

// 11. filter()
// Cria um novo array apenas com os elementos que passaram no teste da função.
let alimentosComA = alimentos.filter(function(item) {
    return item[0] === 'a';
});
console.log(alimentosComA); // ['abacaxi']

// 12. find()
// Retorna o primeiro elemento que satisfaz a condição da função.
let alimentoComC = alimentos.find(function(item) {
    return item[0] === 'c';
});
console.log(alimentoComC); // 'cenoura'

// 13. findIndex()
// Retorna o índice do primeiro elemento que satisfaz a condição da função.
let indiceBatata = alimentos.findIndex(function(item) {
    return item === 'batata';
});
console.log(indiceBatata); // 4

// 14. includes()
// Verifica se o array contém um determinado elemento.
console.log(alimentos.includes('uva')); // true
console.log(alimentos.includes('maçã')); // false

// 15. reduce()
// Reduz o array a um único valor, executando uma função acumuladora.
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);
console.log(soma); // 15

// 16. some()
// Verifica se pelo menos um elemento do array passa no teste da função.
let temNumeroPar = numeros.some(function(numero) {
    return numero % 2 === 0;
});
console.log(temNumeroPar); // true

// 17. every()
// Verifica se todos os elementos do array passam no teste da função.
let todosMaioresQueZero = numeros.every(function(numero) {
    return numero > 0;
});
console.log(todosMaioresQueZero); // true

// 18. sort()
// Ordena os elementos do array. Por padrão, ordena como strings.
let nomes = ['Carlos', 'Ana', 'Bruno'];
nomes.sort();
console.log(nomes); // ['Ana', 'Bruno', 'Carlos']

// Para ordenar números corretamente:
let numerosDesordenados = [10, 2, 5, 1];
numerosDesordenados.sort(function(a, b) {
    return a - b;
});
console.log(numerosDesordenados); // [1, 2, 5, 10]

// 19. reverse()
// Inverte a ordem dos elementos do array.
nomes.reverse();
console.log(nomes); // ['Carlos', 'Bruno', 'Ana']

// Esses são alguns dos principais métodos de Arrays em JavaScript, úteis para manipulação e iteração de listas de dados.
