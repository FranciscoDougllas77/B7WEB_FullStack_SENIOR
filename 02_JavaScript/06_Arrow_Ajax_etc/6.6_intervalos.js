/*
    Intervalos em JavaScript (setInterval e setTimeout)
    ---------------------------------------------------

    Em JavaScript, podemos executar funções de forma programada usando dois métodos principais:
    - setTimeout: Executa uma função após um determinado tempo (apenas uma vez).
    - setInterval: Executa uma função repetidamente em intervalos de tempo definidos.

    Ambos são muito úteis para criar timers, animações, atualizações automáticas, entre outros.

    ---------------------------------------------------
    1. setTimeout
    ---------------------------------------------------
    Executa uma função após um tempo (em milissegundos).

    Sintaxe:
        setTimeout(funcao, tempoEmMs);

    Exemplo:
*/
setTimeout(function() {
    console.log("Executou após 2 segundos (2000ms)");
}, 2000);

/*
    Também pode ser usado com arrow function:
*/
setTimeout(() => {
    console.log("Arrow function após 1 segundo");
}, 1000);

/*
    ---------------------------------------------------
    2. setInterval
    ---------------------------------------------------
    Executa uma função repetidamente a cada intervalo de tempo (em milissegundos).

    Sintaxe:
        setInterval(funcao, tempoEmMs);

    Exemplo:
*/
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if (contador >= 5) {
        clearInterval(intervalo); // Para o intervalo após 5 execuções
        console.log("Intervalo parado.");
    }
}, 1000);

/*
    ---------------------------------------------------
    3. Parando intervalos e timeouts
    ---------------------------------------------------
    - Para parar um setInterval, use clearInterval(id).
    - Para cancelar um setTimeout antes de executar, use clearTimeout(id).

    Exemplo:
*/
const timeoutId = setTimeout(() => {
    console.log("Isso não será exibido, pois será cancelado.");
}, 3000);

clearTimeout(timeoutId); // Cancela o timeout antes de executar

/*
    ---------------------------------------------------
    Resumindo:
    ---------------------------------------------------
    - Use setTimeout para executar algo uma única vez após um tempo.
    - Use setInterval para executar algo repetidamente em intervalos regulares.
    - Sempre guarde o ID retornado por setTimeout/setInterval caso precise cancelar depois.
*/
