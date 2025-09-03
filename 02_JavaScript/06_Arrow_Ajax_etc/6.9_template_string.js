/*
    Template Strings (ou Template Literals) são uma funcionalidade do ES6 que permite criar strings de forma mais prática e poderosa em JavaScript.

    Com Template Strings, você pode:
    - Quebrar linhas facilmente
    - Inserir variáveis e expressões dentro da string usando ${ }
    - Escrever textos longos sem se preocupar com concatenação

    Sintaxe:
    Utiliza crases (` `) ao invés de aspas simples (' ') ou duplas (" ").
*/

// Exemplo básico de Template String
let nome = "João";
let idade = 30;

// Sem template string (concatenação tradicional)
let frase1 = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(frase1);

// Com template string
let frase2 = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(frase2);

// Template string com quebra de linha
let texto = `
Olá, ${nome}!
Você tem ${idade} anos.
Bem-vindo ao curso de JavaScript!
`;
console.log(texto);

// Também é possível usar expressões dentro de ${ }
let a = 5;
let b = 10;
console.log(`A soma de ${a} + ${b} é igual a ${a + b}`);

// Dica: Template Strings facilitam a leitura e manutenção do código, principalmente em textos longos ou com muitas variáveis.

