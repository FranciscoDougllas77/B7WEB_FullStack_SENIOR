// Switch em JavaScript

// O switch é uma estrutura condicional que permite comparar o valor de uma variável
// com vários casos possíveis, executando o bloco correspondente ao valor encontrado.
// É útil quando temos muitas condições para verificar sobre o mesmo valor.

// Sintaxe básica:
/*
switch (expressao) {
  case valor1:
    // código a ser executado se expressao === valor1
    break;
  case valor2:
    // código a ser executado se expressao === valor2
    break;
  default:
    // código a ser executado se nenhum dos casos acima for atendido
}
*/

// Exemplo prático:
let dia = 3;
let nomeDia;

switch (dia) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    nomeDia = "Dia inválido";
}

console.log("Hoje é:", nomeDia); // Saída: Hoje é: Terça-feira

// Dicas:
// - Sempre use o break após cada case para evitar que o código continue executando os próximos casos.
// - O default é opcional, mas recomendado para tratar valores inesperados.
