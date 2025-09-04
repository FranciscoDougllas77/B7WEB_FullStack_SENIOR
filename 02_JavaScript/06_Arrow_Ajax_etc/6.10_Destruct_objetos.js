/*
    Desconstrução de Objetos (Destructuring)

    A desconstrução de objetos é um recurso do ES6 que permite extrair valores de um objeto e atribuí-los a variáveis de forma simples e direta.

    Isso facilita o acesso a propriedades do objeto, tornando o código mais limpo e legível.
*/

// Exemplo de objeto
let pessoa = {
    nome: "Frn",
    sobrenome: 'ABCS',
    idade: 90,
    social: {
        facebook: "DFAGD",
        instagram: "AHJS",
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

// Forma tradicional de acessar propriedades:
console.log(pessoa.social.facebook); // Acessando o facebook do objeto social

// Desconstrução de propriedades do objeto:
const { nome, sobrenome, idade, social, nomeCompleto } = pessoa;
console.log(nome); // "Frn"
console.log(sobrenome); // "ABCS"
console.log(idade); // 90

// Também é possível desconstruir objetos aninhados:
const { facebook, instagram } = pessoa.social;
console.log(facebook); // "DFAGD"
console.log(instagram); // "AHJS"

// Podemos até renomear variáveis durante a desconstrução:
const { nome: primeiroNome } = pessoa;
console.log(primeiroNome); // "Frn"

// Acessando o método nomeCompleto via desconstrução:
console.log(nomeCompleto()); // "Frn ABCS"

/*
    Resumindo:
    - A desconstrução de objetos facilita o acesso às propriedades.
    - Pode ser usada para objetos aninhados.
    - Permite renomear variáveis durante a extração.
*/