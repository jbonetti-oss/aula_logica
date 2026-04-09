const prompt = require("prompt-sync")();

let nota_um = Number(prompt("Digite a sua primeira nota: "));
let nota_dois = Number(prompt("Digite a sua segunda nota: "));
let nota_tres = Number(prompt("Digite a sua terceira nota: "));

let media = (nota_um + nota_dois + nota_tres) / 3;

console.log("A média é " + media);

// if (media <= 5) {
//     console.log("Reprovado");
// } else if (media >= 5.1 && media <= 6.9) {
//     console.log("Recuperação");
// } else if (media >= 7) {
//     console.log("Aprovado");
// } else {
//     console.log("Nota inválida");
// }

console.log("Resultado: " + (media <= 5 ? "Reprovado" : media <= 6.9 ? "Recuperação" : "Aprovado"));

// É o eduardo matando geral