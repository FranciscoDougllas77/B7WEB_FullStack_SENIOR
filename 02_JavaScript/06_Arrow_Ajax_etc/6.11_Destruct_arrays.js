// Desconstruindo arrays (Array destructuring) é uma forma simples e prática de extrair valores de um array e atribuí-los a variáveis individuais.

// Exemplo básico:
const numeros = [10, 20, 30];

// Sem destructuring:
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];

// Com destructuring:
const [x, y, z] = numeros;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

// Também é possível pular valores:
const [primeiro, , terceiro] = numeros;
console.log(primeiro); // 10
console.log(terceiro); // 30

// Podemos usar valores padrão caso o array não tenha todos os elementos:
const [d, e, f = 100, g = 200] = [1, 2];
console.log(d); // 1
console.log(e); // 2
console.log(f); // 100 (valor padrão)
console.log(g); // 200 (valor padrão)

// Destructuring é muito útil para tornar o código mais limpo e legível ao trabalhar com arrays.
