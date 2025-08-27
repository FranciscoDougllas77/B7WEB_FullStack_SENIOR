// Definindo a classe Person para representar uma pessoa
class Person {
    // O construtor recebe o nome e a idade como parâmetros
    constructor(name, age) {
        // Atribui o nome recebido à propriedade 'name' do objeto
        this.name = name;  
        // Atribui a idade recebida à propriedade 'age' do objeto
        this.age = age; 
    }
}

// Cria uma nova instância da classe Person com nome "Maria" e idade 23
let p1 = new Person("Maria", 23);

// Exibe o objeto p1 no console, mostrando suas propriedades
console.log(p1);

// Exibe uma mensagem formatada com o nome e a idade da pessoa
console.log(`O Nome é ${p1.name} e tem ${p1.age} anos`);