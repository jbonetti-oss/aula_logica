const prompt = require('prompt-sync')();

// const carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2022,
//     cor: "Prata",
//     motor: "2.0",
//     cambio: "Automático",
//     portas: 4
// };

// console.log("Marca: " + carro.marca);
// console.log("Modelo: " + carro.modelo);
// console.log("Ano: " + carro.ano);
// console.log("Cor: " + carro.cor);
// console.log("Motor: " + carro.motor);
// console.log("Câmbio: " + carro.cambio);
// console.log("Portas: " + carro.portas);

// const prompt = require('prompt-sync')();

// let nome = prompt("Digite seu nome: ");
// let idade = prompt("Digite sua idade: ");
// let email = prompt("Digite seu email: ");

// let pessoa = {
//     nome: nome,
//     idade: idade,
//     email: email
// };

// console.log("\nDados cadastrados:");
// console.log("Nome:", pessoa.nome);
// console.log("Idade:", pessoa.idade);
// console.log("Email:", pessoa.email);

// let jogo = {
//     jogador1: {
//         nome: prompt("Digite o nome do Jogador 1: "),
//         cor: prompt("Digite a cor do time do Jogador 1: "),
//         pontos: 0
//     },
//     jogador2: {
//         nome: prompt("Digite o nome do Jogador 2: "),
//         cor: prompt("Digite a cor do time do Jogador 2: "),
//         pontos: 0
//     }
// };

// function mostrarPontuacao() {
//     console.log("\n=== Placar Atual ===");
//     console.log(`${jogo.jogador1.nome} (${jogo.jogador1.cor}): ${jogo.jogador1.pontos}`);
//     console.log(`${jogo.jogador2.nome} (${jogo.jogador2.cor}): ${jogo.jogador2.pontos}`);
//     console.log("===================\n");
// }

// let opcao;
// do {
//     mostrarPontuacao();
//     console.log("1 - Aumentar ponto do " + jogo.jogador1.nome);
//     console.log("2 - Aumentar ponto do " + jogo.jogador2.nome);
//     console.log("3 - Encerrar jogo");

//     opcao = prompt("Escolha uma opção: ");

//     if(opcao === "1") {
//         jogo.jogador1.pontos++;
//     } else if(opcao === "2") {
//         jogo.jogador2.pontos++;
//     } else if(opcao === "3") {
//         console.log("\nJogo encerrado!");
//         mostrarPontuacao();
//         break;
//     } else {
//         console.log("Opção inválida! Tente novamente.");
//     }

// } while(true);

// let saldo = 0;

// function deposito(valor) {
//     if (valor > 0) {
//         saldo += valor;
//         console.log(`Depósito de R$${valor} realizado com sucesso!`);
//     } else {
//         console.log("O valor do depósito deve ser positivo.");
//     }
// }

// function saque(valor) {
//     if (valor > 0) {
//         if (valor <= saldo) {
//             saldo -= valor;
//             console.log(`Saque de R$${valor} realizado com sucesso!`);
//         } else {
//             console.log("Saldo insuficiente para saque.");
//         }
//     } else {
//         console.log("O valor do saque deve ser positivo.");
//     }
// }

// function verSaldo() {
//     console.log(`Seu saldo atual é R$${saldo}.`);
// }

// function menu() {
//     while (true) {
//         console.log("\n=== MENU ===");
//         console.log("1. Depósito");
//         console.log("2. Saque");
//         console.log("3. Ver saldo");
//         console.log("4. Sair");

//         const opcao = prompt("Escolha uma opção: ");

//         if (opcao === "4") {
//             console.log("Saindo... até logo!");
//             break;
//         }

//         switch (opcao) {
//             case "1":
//                 const depositoValor = parseFloat(prompt("Digite o valor para depósito: "));
//                 deposito(depositoValor);
//                 break;
//             case "2":
//                 const saqueValor = parseFloat(prompt("Digite o valor para saque: "));
//                 saque(saqueValor);
//                 break;
//             case "3":
//                 verSaldo();
//                 break;
//             default:
//                 console.log("Opção inválida. Tente novamente.");
//                 break;
//         }
//     }
// }

// menu();

// let resultado = 0;

// function soma(a, b) {
//     return a + b;
// }

// function subtracao(a, b) {
//     return a - b;
// }

// function multiplicacao(a, b) {
//     return a * b;
// }

// function divisao(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         console.log("Erro: Divisão por zero!");
//         return null;
//     }
// }

// function menu() {
//     while (true) {
//         console.log("\n=== MENU DA CALCULADORA ===");
//         console.log("1. Soma");
//         console.log("2. Subtração");
//         console.log("3. Multiplicação");
//         console.log("4. Divisão");
//         console.log("5. Sair");

//         const opcao = prompt("Escolha uma opção: ");

//         if (opcao === "5") {
//             console.log("Saindo... até logo!");
//             break;
//         }

//         const num1 = parseFloat(prompt("Digite o primeiro número: "));
//         const num2 = parseFloat(prompt("Digite o segundo número: "));

//         switch (opcao) {
//             case "1":
//                 resultado = soma(num1, num2);
//                 console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
//                 break;
//             case "2":
//                 resultado = subtracao(num1, num2);
//                 console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
//                 break;
//             case "3":
//                 resultado = multiplicacao(num1, num2);
//                 console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
//                 break;
//             case "4":
//                 resultado = divisao(num1, num2);
//                 if (resultado !== null) {
//                     console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
//                 }
//                 break;
//             default:
//                 console.log("Opção inválida. Tente novamente.");
//                 break;
//         }
//     }
// }

// menu();

nome_sobrenome

const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");

console.log ("Nome completo: " + nome + " " + sobrenome);