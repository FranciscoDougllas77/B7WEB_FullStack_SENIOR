// Strings em JavaScript

// Uma string é uma sequência de caracteres usada para representar textos.
// Podemos criar strings usando aspas simples (' '), aspas duplas (" ") ou crase (` `).

let nome = "João";
let saudacao = 'Olá';
let mensagem = "Bem-vindo ao curso de JavaScript!";

// Podemos concatenar (juntar) strings usando o operador +
let frase = saudacao + ", " + nome + "!";
console.log(frase); // Olá, João!

// Template String (Template Literal)

// A partir do ES6, o JavaScript introduziu o Template String (ou Template Literal),
// que permite interpolar variáveis e expressões dentro de uma string de forma mais fácil e legível.
// Para isso, usamos a crase (` `) e a sintaxe ${ } para inserir variáveis ou expressões.

let idade = 30;
let mensagemTemplate = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagemTemplate); // Meu nome é João e eu tenho 30 anos.

// Também é possível quebrar linhas facilmente dentro de uma template string:
let textoMultilinha = `
Olá, ${nome}!
Seja bem-vindo.
Idade: ${idade}
`;
console.log(textoMultilinha);

// Resumindo:
// - Use strings normais para textos simples.
// - Use template strings quando precisar inserir variáveis, expressões ou criar textos com múltiplas linhas.
