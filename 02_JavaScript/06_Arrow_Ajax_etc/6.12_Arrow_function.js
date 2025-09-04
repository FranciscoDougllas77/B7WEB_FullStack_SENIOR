// Arrow Function (Função de seta) é uma forma mais curta e moderna de escrever funções em JavaScript.
// Ela foi introduzida no ES6 e é muito utilizada por sua sintaxe enxuta e por não criar um novo contexto de 'this'.

// Sintaxe tradicional de função:
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3)); // 5

// Sintaxe com arrow function:
const somaArrow = (a, b) => {
    return a + b;
};
console.log(somaArrow(2, 3)); // 5

// Se a função tiver apenas uma expressão, pode omitir as chaves e o 'return':
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20

// Se houver apenas um parâmetro, pode omitir os parênteses:
const dobro = n => n * 2;
console.log(dobro(6)); // 12

// Arrow functions NÃO possuem seu próprio 'this', 'arguments', 'super' ou 'new.target'.
// Isso significa que o valor de 'this' dentro de uma arrow function é o mesmo do contexto onde ela foi criada.

// Exemplo de uso do 'this':
const pessoa = {
    nome: 'João',
    apresentar: function() {
        setTimeout(() => {
            // Aqui, 'this' se refere ao objeto 'pessoa'
            console.log(`Olá, meu nome é ${this.nome}`);
        }, 1000);
    }
};
pessoa.apresentar(); // Olá, meu nome é João

// Resumindo:
// - Arrow function é mais curta e prática para funções simples.
// - Não cria um novo 'this', o que pode ser útil em callbacks.
// - Não deve ser usada como método de objeto quando você precisa de um 'this' dinâmico.
