/*
    Explicação sobre o setTimeout em JavaScript

    O setTimeout é uma função nativa do JavaScript utilizada para executar uma função ou um trecho de código após um determinado tempo (em milissegundos).

    Sintaxe:
        setTimeout(funcao, tempoEmMs);

    - funcao: a função que será executada após o tempo especificado.
    - tempoEmMs: o tempo de espera em milissegundos (1000 ms = 1 segundo).

    Exemplo básico:
*/
setTimeout(function() {
    console.log("Executou após 2 segundos!");
}, 2000);

/*
    Também pode ser usado com arrow function:
*/
setTimeout(() => {
    console.log("Arrow function após 1 segundo!");
}, 1000);

/*
    Dicas:
    - O setTimeout executa a função apenas uma vez após o tempo determinado.
    - Se quiser executar repetidamente, utilize setInterval.
    - O setTimeout retorna um ID, que pode ser usado para cancelar a execução com clearTimeout(id).
*/

// Exemplo de cancelamento:
const idTimeout = setTimeout(() => {
    console.log("Isso não será exibido, pois será cancelado.");
}, 3000);

clearTimeout(idTimeout); // Cancela o timeout antes de executar
