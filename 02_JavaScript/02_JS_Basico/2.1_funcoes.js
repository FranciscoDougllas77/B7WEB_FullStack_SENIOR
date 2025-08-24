// Uma função em JavaScript é um bloco de código projetado para executar uma tarefa específica. 
// Ela pode receber entradas (chamadas de parâmetros), processar essas entradas e retornar um resultado. 
// Funções ajudam a organizar o código, reutilizar lógicas e tornar o programa mais modular e legível.

// Exemplo de declaração de função:
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

// Para usar a função acima:
console.log(saudacao("Maria")); // Saída: Olá, Maria!

// Funções podem ser declaradas de diferentes formas, como funções anônimas e arrow functions.
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // Saída: 5
