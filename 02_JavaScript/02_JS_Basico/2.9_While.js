// Loop while em JavaScript
// ------------------------
// O while é uma estrutura de repetição que executa um bloco de código
// ENQUANTO uma condição for verdadeira. Ele é útil quando não sabemos
// exatamente quantas vezes o loop deve rodar.

// Sintaxe básica:
let contador = 0;
while (contador < 5) {
    console.log("Valor de contador:", contador);
    contador++;
}
// Saída: 0, 1, 2, 3, 4

// Explicação:
// - A condição (contador < 5) é verificada ANTES de cada repetição.
// - Se for verdadeira, o bloco é executado.
// - Se for falsa, o loop termina.

// Exemplo: Pedindo ao usuário um número maior que 10
// (No navegador, descomente para testar)
// let numero = prompt("Digite um número maior que 10:");
// while (numero <= 10) {
//     numero = prompt("Tente novamente. Digite um número maior que 10:");
// }
// console.log("Número válido:", numero);

// Forma alternativa: do...while
// -----------------------------
// O do...while executa o bloco pelo menos UMA VEZ, pois a condição é verificada depois.

let senha = "1234";
let tentativa;
do {
    // No navegador, descomente para testar
    // tentativa = prompt("Digite a senha:");
    tentativa = "1234"; // Exemplo fixo para não travar o código
} while (tentativa !== senha);
console.log("Senha correta!");

// Resumindo:
// - while: repete enquanto a condição for verdadeira (pode não executar nenhuma vez)
// - do...while: executa pelo menos uma vez, depois verifica a condição
// - Use quando não souber exatamente o número de repetições
