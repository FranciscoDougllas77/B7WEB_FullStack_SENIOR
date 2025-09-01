// Síncrono e Assíncrono em JavaScript

// Síncrono:
// Em operações síncronas, o código é executado linha por linha, ou seja, uma instrução só começa após a anterior terminar.
// Exemplo:
console.log("Início do processo síncrono");
console.log("Processando...");
console.log("Fim do processo síncrono");

// Saída:
// Início do processo síncrono
// Processando...
// Fim do processo síncrono

// Assíncrono:
// Em operações assíncronas, algumas tarefas podem ser iniciadas e, enquanto aguardam sua conclusão (como requisições a servidores ou timers), o restante do código continua executando.
// Exemplo usando setTimeout (simulando uma operação demorada):
console.log("Início do processo assíncrono");
setTimeout(function() {
    console.log("Processando... (demorado)");
}, 2000);
console.log("Fim do processo assíncrono");

// Saída esperada:
// Início do processo assíncrono
// Fim do processo assíncrono
// (após 2 segundos)
// Processando... (demorado)

// Resumindo:
// - Síncrono: execução em sequência, uma tarefa por vez.
// - Assíncrono: permite que tarefas demoradas não bloqueiem a execução do restante do código, melhorando a performance e a experiência do usuário.
