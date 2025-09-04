// Código Síncrono e Assíncrono em JavaScript

// Síncrono:
// No JavaScript, código síncrono é executado linha por linha, de forma sequencial.
// Cada instrução só é executada após a anterior terminar.
// Exemplo:
console.log("Início");
console.log("Meio");
console.log("Fim");
// Saída:
// Início
// Meio
// Fim

// Assíncrono:
// Código assíncrono permite que certas operações (como requisições a servidores, timers, etc.)
// sejam executadas "em paralelo", sem bloquear a execução das próximas linhas.
// Funções como setTimeout, Promises, async/await e callbacks são usadas para lidar com operações assíncronas.
// Exemplo:
console.log("Início");

setTimeout(function() {
    console.log("Meio (assíncrono)");
}, 2000);

console.log("Fim");
// Saída:
// Início
// Fim
// Meio (assíncrono)   <-- aparece depois de 2 segundos

// Resumindo:
// - Síncrono: execução em ordem, uma linha de cada vez, bloqueando o fluxo até terminar.
// - Assíncrono: permite que tarefas demoradas sejam executadas em segundo plano, sem travar o restante do código.
