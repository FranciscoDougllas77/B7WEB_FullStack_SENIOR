// Operador Ternário em JavaScript

// O operador ternário é uma forma simplificada de escrever uma estrutura condicional (if/else) em uma única linha.
// Sua sintaxe é:
// condição ? valor_se_verdadeiro : valor_se_falso;

// Ele avalia a condição. Se for verdadeira, retorna o valor_se_verdadeiro; caso contrário, retorna o valor_se_falso.

// Exemplo básico:
let idade = 20;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // Saída: Maior de idade

// O operador ternário é muito útil para atribuições rápidas ou para retornar valores em funções.
// Também pode ser aninhado, mas recomenda-se evitar muitos níveis para não prejudicar a legibilidade.

// Exemplo com ternário aninhado:
let nota = 6;
let resultado = (nota >= 7) ? "Aprovado" : (nota >= 5) ? "Recuperação" : "Reprovado";
console.log(resultado); // Saída: Recuperação

// Resumindo:
// - Use o operador ternário para simplificar condicionais simples.
// - Para condições mais complexas, prefira o uso do if/else tradicional para manter o código legível.
