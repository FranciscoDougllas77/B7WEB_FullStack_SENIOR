// Classe Person representa uma pessoa com nome e idade
class Person {
    // Propriedade de instância para idade, iniciando em 0
    age = 0;

    /**
     * Construtor da classe Person
     * @param {string} name - Nome da pessoa
     */
    constructor(name) {
        this.name = name; // Armazena o nome da pessoa
    }
}

/**
 * Função de fábrica para criar uma nova pessoa
 * @param {string} name - Nome da pessoa
 * @param {number} age - Idade da pessoa
 * @returns {Person} Nova instância de Person com nome e idade definidos
 */
function createPerson(name, age) {
    let p = new Person(name); // Cria uma nova pessoa com o nome fornecido
    p.age = age; // Define a idade da pessoa
    return p; // Retorna a nova pessoa criada
}

// Cria uma nova pessoa chamada "Gilbert" com 90 anos usando a função de fábrica
let p1 = createPerson("Gilbert", 90);

// Exibe no console o nome e a idade da pessoa criada
console.log(`${p1.name} tem ${p1.age} anos`);