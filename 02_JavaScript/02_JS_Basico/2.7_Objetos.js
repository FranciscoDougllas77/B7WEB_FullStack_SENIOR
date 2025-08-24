// Objetos em JavaScript
// ---------------------
// Objetos são estruturas que permitem armazenar múltiplos valores em pares de chave e valor.
// Eles são muito usados para representar entidades do mundo real, como uma pessoa, um carro, etc.

// Como criar um objeto:
let pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
};

console.log(pessoa); // Saída: { nome: "Ana", idade: 28, profissao: "Engenheira" }

// Acessando propriedades do objeto:
console.log(pessoa.nome); // Saída: Ana
console.log(pessoa['idade']); // Saída: 28

// Modificando propriedades:
pessoa.idade = 29;
pessoa['profissao'] = "Desenvolvedora";
console.log(pessoa);

// Adicionando novas propriedades:
pessoa.sobrenome = "Silva";
console.log(pessoa);

// Removendo propriedades:
delete pessoa.profissao;
console.log(pessoa);

// Métodos em objetos (funções dentro de objetos):
let cachorro = {
    nome: "Rex",
    latir: function() {
        console.log("Au Au!");
    }
};

cachorro.latir(); // Saída: Au Au!

// Forma moderna (ES6) de declarar métodos:
let gato = {
    nome: "Mimi",
    miar() {
        console.log("Miau!");
    }
};

gato.miar(); // Saída: Miau!

// Percorrendo propriedades de um objeto:
for(let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// Object.keys, Object.values e Object.entries:
console.log(Object.keys(pessoa));   // Retorna array com as chaves
console.log(Object.values(pessoa)); // Retorna array com os valores
console.log(Object.entries(pessoa)); // Retorna array de arrays [chave, valor]

// Resumindo:
// - Objetos armazenam dados em pares chave:valor
// - Permitem acessar, modificar, adicionar e remover propriedades
// - Podem ter métodos (funções internas)
// - São essenciais para organizar e estruturar dados em JavaScript
