// Classe Person representa uma pessoa com nome, sobrenome, idade e passos dados.
class Person{
    // Propriedade de instância para idade (não utilizada diretamente devido ao getter/setter)
    age = 0;
    // Propriedade de instância para contar os passos dados pela pessoa
    steps = 0;

    /**
     * Construtor da classe Person.
     * @param {string} firstName - Primeiro nome da pessoa.
     * @param {string} lastName - Sobrenome da pessoa.
     */
    constructor(firstName, lastName){
        this.firstName = firstName; // Armazena o primeiro nome
        this.lastName = lastName;   // Armazena o sobrenome
    }

    /**
     * Método para incrementar o número de passos dados pela pessoa.
     */
    takeAstep(){
        this.steps++;
    }

    /**
     * Getter para retornar o nome completo da pessoa.
     * @returns {string} Nome completo (primeiro nome + sobrenome)
     */
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    /**
     * Getter para acessar a idade da pessoa.
     * Utiliza a propriedade privada _age.
     * @returns {number} Idade da pessoa
     */
    get age(){
        return this._age
    }

    /**
     * Setter para definir a idade da pessoa.
     * Armazena o valor na propriedade privada _age.
     * @param {number} x - Nova idade a ser definida
     */
    set age(x){
        this._age = x;
    }
}

// Criação de três instâncias da classe Person com diferentes nomes.
let p1 = new Person("Maria", "Leita");
let p2 = new Person("Miguel", "Artu");
let p3 = new Person("", "BBB");

// Definindo a idade de p1 e p2 usando o setter de age.
p1.age = 20;
p2.age = 34;

// Maria (p1) dá dois passos.
p1.takeAstep();
p1.takeAstep();

// Miguel (p2) dá cinco passos usando um loop.
for(let i = 1; i <= 5; i++){
    p2.takeAstep();
}

// Exibe no console o nome, idade e quantidade de passos de p1.
console.log(`${p1.firstName} tem ${p1.age} anos e deu ${p1.steps} passos`)
// Exibe no console o nome, idade e quantidade de passos de p2.
console.log(`${p2.firstName} tem ${p2.age} anos e deu ${p2.steps} passos`)
// Exibe no console o nome e idade de p3 (que não teve idade definida, será undefined).
console.log(`${p3.firstName} tem ${p3.age} anos`)
