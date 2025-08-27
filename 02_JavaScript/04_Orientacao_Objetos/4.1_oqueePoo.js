// O que é POO?
// Programação Orientada a Objetos (POO) é um paradigma que organiza o código em objetos, que representam entidades do mundo real ou conceitos, agrupando dados (propriedades) e comportamentos (métodos).
// Os principais pilares da POO são: encapsulamento, herança, polimorfismo e abstração.

// Exemplo simples de classe e objeto:
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar(); // Olá, meu nome é João e tenho 30 anos.

// Exemplo de herança e polimorfismo:
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
  }
  apresentar() {
    // Polimorfismo: sobrescrevendo o método
    console.log(`Olá, sou ${this.nome}, trabalho como ${this.cargo}.`);
  }
}
