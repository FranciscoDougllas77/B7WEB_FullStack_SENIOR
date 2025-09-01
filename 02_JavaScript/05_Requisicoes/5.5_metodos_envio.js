// Promise (Promessa) em JavaScript:
// Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
// Ela pode estar em três estados: pendente, resolvida (fulfilled) ou rejeitada (rejected).

/*
==========================================
INFORMAÇÕES SOBRE OS MÉTODOS DE ENVIO HTTP
==========================================

Os métodos de envio HTTP determinam a ação desejada ao fazer uma requisição para um servidor. Os principais métodos são:

- GET: Utilizado para solicitar dados de um recurso. Os parâmetros são enviados na URL. Não deve ser usado para enviar dados sensíveis.
- POST: Utilizado para enviar dados ao servidor (por exemplo, formulários). Os dados são enviados no corpo da requisição.
- PUT: Utilizado para atualizar um recurso existente no servidor, enviando os dados no corpo da requisição.
- DELETE: Utilizado para remover um recurso do servidor.
- PATCH: Utilizado para atualizar parcialmente um recurso.

Exemplo de uso do método fetch com diferentes métodos de envio:

// GET (padrão)
fetch(url);

// POST
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome: "João", idade: 30 })
});

// PUT
fetch(url, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome: "Maria" })
});

// DELETE
fetch(url, {
    method: "DELETE"
});

==========================================
*/

function cliclou(){
    // O método fetch retorna uma Promise.
    // Inicialmente, a Promise está "pendente" enquanto aguarda a resposta da requisição.
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        // Quando a resposta chega, a Promise é "resolvida" e podemos processar o resultado.
        // O método response.json() também retorna uma Promise, pois a conversão pode ser assíncrona.
        return response.json();
    })
    .then((json) => {
        // Aqui, a Promise de response.json() foi resolvida e temos acesso ao JSON.
        alert("Titulos dos Posts: " + json[0].title);
    })
    .catch((erro) => {
        // Se alguma das Promises for rejeitada (por exemplo, erro de rede), o catch captura o erro.
        alert("Ocorreu um erro: " + erro);
    });
}

// Adicionando o evento de clique ao botão
document.querySelector("#botao").addEventListener("click", cliclou);

// Resumindo:
// - Promise é uma forma de lidar com operações assíncronas em JavaScript.
// - Permite encadear ações a serem executadas quando a operação terminar (com .then) ou caso ocorra um erro (com .catch).