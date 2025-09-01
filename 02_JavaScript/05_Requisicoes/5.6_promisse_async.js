// Exemplo de utilização do async/await integrado ao HTML

// Onde está o await? Veja nos comentários abaixo!

// Seleciona o botão pelo id
const botao = document.getElementById('botao');

// Função assíncrona que faz uma requisição para uma API pública
async function buscarUsuario() {
    try {
        // Aqui está o primeiro await: espera a resposta da requisição fetch
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
        // Aqui está o segundo await: espera o parsing do JSON da resposta
        const usuario = await resposta.json();

        // Exibe os dados do usuário na tela
        mostrarUsuario(usuario);
    } catch (erro) {
        alert('Ocorreu um erro ao buscar os dados!');
        console.error(erro);
    }
}

// Função para mostrar os dados do usuário no HTML
function mostrarUsuario(usuario) {
    // Cria ou seleciona um elemento para exibir os dados
    let info = document.getElementById('info-usuario');
    if (!info) {
        info = document.createElement('div');
        info.id = 'info-usuario';
        document.querySelector('main').appendChild(info);
    }
    info.innerHTML = `
        <h2>Usuário encontrado:</h2>
        <p><strong>Nome:</strong> ${usuario.name}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Cidade:</strong> ${usuario.address.city}</p>
    `;
}

// Adiciona o evento de clique ao botão para disparar a função assíncrona
botao.addEventListener('click', buscarUsuario);
