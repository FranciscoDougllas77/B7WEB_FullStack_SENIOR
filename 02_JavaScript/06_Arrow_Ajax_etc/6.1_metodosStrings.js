let nome = "Francisco Beserra de Sousa";

//Contando os Caracteres
console.log(nome.length);


// indexof verifica a posição de uma string
let resultado = nome.indexOf("Beserra");
console.log(resultado);

//Metodos de String
let resultado2 = nome.replace("Beserra", "Sousa");
console.log(resultado2);

//Metodos de String
let resultado3 = nome.toUpperCase();
console.log(resultado3);

//Metodos de String
let resultado4 = nome.toLowerCase();
console.log(resultado4);

//Metodos de String
let resultado5 = nome.charAt(0);
console.log(resultado5);

//Metodos de String
let resultado6 = nome.substring(0, 9);
console.log(resultado6);

//Metodos de String
let resultado7 = nome.split(" ");
console.log(resultado7);

//Metodos de String
let resultado8 = nome.trim();
console.log(resultado8);

//Metodos de String
let resultado9 = nome.includes("Beserra");
console.log(resultado9);

//Metodos de String
let resultado10 = nome.startsWith("Francisco");
console.log(resultado10);

//Metodos de String
let resultado11 = nome.endsWith("Sousa");
console.log(resultado11);

//Metodos de String
let resultado12 = nome.repeat(3);
console.log(resultado12);

//Metodo Slice
let resultado13 = nome.slice(0, 9);
console.log(resultado13);