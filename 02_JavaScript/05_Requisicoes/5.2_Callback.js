// Callback é uma função passada como argumento para outra função, que será executada após algum evento ou operação terminar.
// Em JavaScript, callbacks são muito usados para lidar com operações assíncronas, como requisições a servidores ou timers.

// Exemplo simples de callback:
function saudacao(nome, callback) {
    console.log("Olá, " + nome + "!");
    callback();
}

function mostrarMensagem() {
    console.log("Seja bem-vindo(a)!");
}

saudacao("Maria", mostrarMensagem);

// No exemplo acima, a função 'mostrarMensagem' é passada como callback para 'saudacao'.
// Após exibir a saudação, a função callback é chamada, mostrando a mensagem adicional.

// Callbacks são importantes para garantir que certas ações só aconteçam depois que outras terminarem,
// especialmente em situações assíncronas, como ler arquivos, acessar bancos de dados ou fazer requisições HTTP.
