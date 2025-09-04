// Objeto: Key, Values e Entries

// Em JavaScript, objetos são coleções de pares chave-valor. 
// Para trabalhar com as propriedades de um objeto, existem três métodos principais:

// Object.keys(obj): retorna um array com os nomes (chaves) das propriedades do objeto.
const pessoa = {
    nome: 'Carlos',
    idade: 28,
    cidade: 'Recife'
};

console.log(Object.keys(pessoa)); 
// Saída: ['nome', 'idade', 'cidade']

// Object.values(obj): retorna um array com os valores das propriedades do objeto.
console.log(Object.values(pessoa)); 
// Saída: ['Carlos', 28, 'Recife']

// Object.entries(obj): retorna um array de arrays, onde cada sub-array contém um par [chave, valor].
console.log(Object.entries(pessoa)); 
// Saída: [['nome', 'Carlos'], ['idade', 28], ['cidade', 'Recife']]

// Esses métodos são muito úteis para percorrer objetos, transformar dados ou extrair informações.

// Exemplo de uso com forEach para percorrer as entries:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
// Saída:
// nome: Carlos
// idade: 28
// cidade: Recife

// Resumindo:
// - Object.keys() pega só as chaves.
// - Object.values() pega só os valores.
// - Object.entries() pega ambos em pares.
