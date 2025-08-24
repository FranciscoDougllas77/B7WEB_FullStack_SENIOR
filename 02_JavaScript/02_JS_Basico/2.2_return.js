// Exemplo 1: Função que retorna um valor simples
function dobrar(numero) {
    // Retorna o dobro do número recebido como parâmetro
    return numero * 2;
}

console.log(dobrar(5)); // Saída: 10

// Exemplo 2: Função que retorna uma string personalizada
function criarMensagem(nome) {
    // Retorna uma mensagem de saudação usando o parâmetro 'nome'
    return `Bem-vindo, ${nome}!`;
}

console.log(criarMensagem("João")); // Saída: Bem-vindo, João!

// Exemplo 3: Função que recebe dois parâmetros e retorna a soma
function somar(a, b) {
    // Retorna a soma dos dois parâmetros
    return a + b;
}

console.log(somar(3, 7)); // Saída: 10

// Exemplo 4: Função que retorna true se o número for par, false caso contrário
function ehPar(numero) {
    // Usa o operador % para verificar se o número é divisível por 2
    return numero % 2 === 0;
}

console.log(ehPar(4)); // Saída: true
console.log(ehPar(7)); // Saída: false
