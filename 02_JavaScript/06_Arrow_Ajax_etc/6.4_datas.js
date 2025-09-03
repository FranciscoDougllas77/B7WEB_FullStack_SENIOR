/*
    Trabalhando com Datas em JavaScript
    ----------------------------------------

    O JavaScript possui o objeto Date para manipulação de datas e horários.
    Com ele, é possível criar datas, obter partes específicas (ano, mês, dia, etc.),
    formatar e realizar cálculos com datas.

    1. Criando uma data atual:
*/
const agora = new Date();
console.log("Data e hora atual:", agora);

/*
    2. Criando uma data específica:
    (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo)
    Obs: O mês começa do zero (0 = Janeiro, 11 = Dezembro)
*/
const dataEspecifica = new Date(2024, 5, 10, 14, 30); // 10 de Junho de 2024, 14:30
console.log("Data específica:", dataEspecifica);

/*
    3. Criando data a partir de string:
*/
const dataString = new Date("2023-12-25T10:00:00");
console.log("Data a partir de string:", dataString);

/*
    4. Obtendo partes da data:
*/
console.log("Ano:", agora.getFullYear());
console.log("Mês:", agora.getMonth() + 1); // +1 pois começa do zero
console.log("Dia:", agora.getDate());
console.log("Hora:", agora.getHours());
console.log("Minutos:", agora.getMinutes());
console.log("Segundos:", agora.getSeconds());

/*
    5. Formatando datas (simples):
*/
const dia = agora.getDate().toString().padStart(2, '0');
const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
const ano = agora.getFullYear();
console.log(`Data formatada: ${dia}/${mes}/${ano}`);

/*
    6. Calculando diferença entre datas (em dias):
*/
const data1 = new Date("2024-06-01");
const data2 = new Date("2024-06-10");
const diffMs = data2 - data1; // diferença em milissegundos
const diffDias = diffMs / (1000 * 60 * 60 * 24);
console.log(`Diferença em dias: ${diffDias}`);

/*
    7. Adicionando dias a uma data:
*/
let novaData = new Date();
novaData.setDate(novaData.getDate() + 7); // adiciona 7 dias
console.log("Data + 7 dias:", novaData);

/*
    Dicas:
    - Sempre lembre que os meses começam do zero.
    - Para formatações mais avançadas, considere bibliotecas como date-fns ou moment.js.
    - O objeto Date trabalha com o fuso horário do sistema.
*/
