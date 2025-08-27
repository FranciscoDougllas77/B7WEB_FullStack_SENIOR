// Classe Person representa uma pessoa
class Person{

    // Propriedade estática: todas as pessoas têm 2 mãos
    static hands = 2;

    // Propriedade de instância: idade da pessoa, começa em 0
    age = 0;

    // Construtor recebe o nome da pessoa
    constructor(name){
        this.name = name;
    }

    // Método que exibe uma mensagem de apresentação no console
    sayHi(){
        // Usa a propriedade estática hands para mostrar o número de mãos
        console.log(`Ola eu sou ${this.name} e tenho ${Person.hands} mãos`)
    }
}

// Cria uma nova pessoa chamada "ABC"
let p1 = new Person("ABC")
// Chama o método sayHi para apresentar a pessoa
p1.sayHi()