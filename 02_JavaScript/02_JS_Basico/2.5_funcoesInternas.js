// Variáveis dentro de funções:
// ----------------------------
// Quando declaramos uma variável dentro de uma função, ela só existe dentro daquela função.
// Isso é chamado de "escopo local". Fora da função, essa variável não pode ser acessada.

function exemploVariavel() {
    let mensagem = "Sou uma variável local!";
    console.log(mensagem); // Isso funciona
}

exemploVariavel();
// console.log(mensagem); // Isso daria erro, pois 'mensagem' não existe aqui fora

// Funções dentro de funções (funções internas):
// ---------------------------------------------
// Podemos declarar uma função dentro de outra função. 
// A função interna só pode ser usada dentro da função onde foi criada.

function funcaoExterna() {
    function funcaoInterna() {
        console.log("Sou uma função interna!");
    }
    funcaoInterna(); // Chamando a função interna
}

funcaoExterna();
// funcaoInterna(); // Isso daria erro, pois 'funcaoInterna' não existe aqui fora

// Resumindo:
// - Variáveis e funções declaradas dentro de uma função só existem dentro dela (escopo local).
// - Funções internas são úteis para organizar o código e criar lógicas auxiliares que só fazem sentido dentro da função principal.
