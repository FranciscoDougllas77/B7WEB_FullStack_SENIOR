/*
    O objeto Math em JavaScript
    ----------------------------------------

    O objeto Math é um objeto embutido que fornece propriedades e métodos para realizar operações matemáticas, como arredondamento, potência, raiz quadrada, trigonometria, valores aleatórios, entre outros.

    Principais métodos e propriedades do Math:
*/

// Valor de PI
console.log("PI:", Math.PI);

// Arredondamento
console.log("Arredondar para cima (ceil):", Math.ceil(4.3));   // 5
console.log("Arredondar para baixo (floor):", Math.floor(4.7)); // 4
console.log("Arredondar para o inteiro mais próximo (round):", Math.round(4.5)); // 5

// Valor absoluto
console.log("Valor absoluto:", Math.abs(-10)); // 10

// Potência e raiz
console.log("2 elevado a 3:", Math.pow(2, 3)); // 8
console.log("Raiz quadrada de 16:", Math.sqrt(16)); // 4

// Máximo e mínimo
console.log("Máximo:", Math.max(10, 20, 5)); // 20
console.log("Mínimo:", Math.min(10, 20, 5)); // 5

// Números aleatórios
console.log("Número aleatório entre 0 e 1:", Math.random());

// Exemplo: número aleatório inteiro entre 1 e 10
const aleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatório entre 1 e 10:", aleatorio);

/*
    Outros métodos úteis:
    - Math.trunc(x): Remove a parte decimal de x.
    - Math.sign(x): Retorna o sinal de x (1, -1 ou 0).
    - Math.cbrt(x): Raiz cúbica de x.
    - Math.log(x): Logaritmo natural de x.
    - Math.sin(x), Math.cos(x), Math.tan(x): Funções trigonométricas (em radianos).

    Resumindo:
    ----------------------------------------
    O objeto Math é fundamental para qualquer operação matemática em JavaScript, pois oferece funções prontas para cálculos comuns e avançados.
*/
