// Callbacks em JavaScript
// -----------------------
// Um callback é uma função passada como argumento para outra função, que será executada após algum evento ou operação terminar.
// Callbacks são muito usados para lidar com operações assíncronas, como requisições a servidores, leitura de arquivos, timers, etc.

// Exemplo básico de callback:
function saudacao(nome, callback) {
    console.log("Olá, " + nome + "!");
    callback();
}

function mostrarMensagem() {
    console.log("Seja bem-vindo ao curso!");
}

saudacao("Maria", mostrarMensagem);
// Saída:
// Olá, Maria!
// Seja bem-vindo ao curso!

// Exemplo com operação assíncrona (setTimeout):
function esperarESaudacao(nome, callback) {
    setTimeout(function() {
        console.log("Olá, " + nome + "!");
        callback();
    }, 2000);
}

esperarESaudacao("João", function() {
    console.log("Essa mensagem aparece depois da saudação.");
});
// Saída (após 2 segundos):
// Olá, João!
// Essa mensagem aparece depois da saudação.

// Resumindo:
// - Callback é uma função passada como parâmetro para outra função.
// - Permite executar código após uma operação terminar (especialmente útil em operações assíncronas).
// - Muito usado em JavaScript para manipular fluxos assíncronos.
