// Função com retorno condicional em JavaScript
// Esta função recebe um número como parâmetro e retorna uma mensagem diferente
// dependendo se o número é positivo, negativo ou zero.

function verificarNumero(numero) {
    if (numero > 0) {
        // Retorna mensagem para número positivo
        return "O número é positivo.";
    } else if (numero < 0) {
        // Retorna mensagem para número negativo
        return "O número é negativo.";
    } else {
        // Retorna mensagem para zero
        return "O número é zero.";
    }
}

// Exemplos de uso da função:
console.log(verificarNumero(10));   // Saída: O número é positivo.
console.log(verificarNumero(-5));   // Saída: O número é negativo.
console.log(verificarNumero(0));    // Saída: O número é zero.
