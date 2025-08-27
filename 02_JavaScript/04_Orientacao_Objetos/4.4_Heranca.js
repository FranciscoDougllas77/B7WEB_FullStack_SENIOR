// Classe que representa uma pessoa genérica
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

// Classe Student herda de Person, representando um estudante
class Student extends Person {
    /**
     * Construtor da classe Student
     * @param {string} name - Nome do estudante
     * @param {number} id - Matrícula do estudante
     */
    constructor(name, id) {
        super(name); // Chama o construtor da classe Person
        this.id = id; // Armazena a matrícula do estudante
    }
}

// Cria uma instância de Student chamada p1
let p1 = new Student("Silva", 12);
// Define a idade do estudante p1
p1.age = 23;
// Exibe no console o nome, idade e matrícula do estudante
console.log(`${p1.name} tem ${p1.age} anos e a matricula e ${p1.id}`)