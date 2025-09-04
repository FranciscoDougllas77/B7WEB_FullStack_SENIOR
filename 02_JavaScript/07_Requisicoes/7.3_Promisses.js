// Promises em JavaScript
// ----------------------
// Promises (ou Promessas) são objetos usados para lidar com operações assíncronas em JavaScript, como requisições a servidores, leitura de arquivos, etc.
// Elas representam um valor que pode estar disponível agora, no futuro ou nunca.

// Uma Promise pode estar em 3 estados:
// - Pending (pendente): ainda não finalizada.
// - Fulfilled (realizada): operação concluída com sucesso.
// - Rejected (rejeitada): operação falhou.

// Sintaxe básica para criar uma Promise:
const minhaPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona (ex: requisição)
    setTimeout(() => {
        const sucesso = true; // Troque para false para testar o reject
        if (sucesso) {
            resolve("Operação realizada com sucesso!");
        } else {
            reject("Ocorreu um erro na operação.");
        }
    }, 2000);
});

// Consumindo a Promise:
minhaPromise
    .then((resultado) => {
        console.log("Sucesso:", resultado);
    })
    .catch((erro) => {
        console.log("Erro:", erro);
    });

// Exemplo prático: função que retorna uma Promise
function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { nome: "Maria", idade: 30 };
            resolve(dados);
        }, 1500);
    });
}

buscarDados()
    .then((dados) => {
        console.log("Dados recebidos:", dados);
    })
    .catch((erro) => {
        console.log("Erro ao buscar dados:", erro);
    });

// Resumindo:
// - Promises facilitam o controle de operações assíncronas, evitando o "callback hell".
// - Use .then() para tratar sucesso e .catch() para tratar erros.
// - Promises são a base para async/await, que deixa o código assíncrono ainda mais legível.
