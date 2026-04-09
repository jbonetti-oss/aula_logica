const prompt = require('prompt-sync')({ sigint: true });

function menu() {
    console.log("\n=== MENU DE PROGRAMAS ===");
    console.log("1 - Contar até 20");
    console.log("2 - Números pares até um número");
    console.log("3 - Login simples");
    console.log("4 - Média de 10 notas");
    console.log("0 - Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch(opcao) {
        case '1': contarAte20(); break;
        case '2': numerosPares(); break;
        case '3': loginSimples(); break;
        case '4': mediaNotas(); break;
        case '0': return console.log("Programa encerrado!");
        default: console.log("Opção inválida!");
    }

    if(prompt("Deseja continuar? (s/n): ").toLowerCase() === 's') menu();
}

// --- Programa 1 ---
function contarAte20() {
    console.log("\nContando de 1 até 20:");
    for(let i = 1; i <= 20; i++) console.log(i);
}

// --- Programa 2 ---
function numerosPares() {
    const n = parseInt(prompt("Digite um número: "));
    if(isNaN(n) || n < 0) return console.log("Número inválido!");
    console.log(`Números pares até ${n}:`);
    for(let i = 0; i <= n; i+=2) console.log(i);
}

// --- Programa 3 ---
function loginSimples() {
    const usuarios = { admin: "1234", joao: "joao123" };
    let tentativas = 0;
    while(tentativas < 3) {
        const u = prompt("Usuário: ");
        const s = prompt("Senha: ");
        if(usuarios[u] === s) return console.log("Login realizado!");
        tentativas++;
        console.log(`Errado! Tentativas restantes: ${3 - tentativas}`);
    }
    console.log("Acesso bloqueado!");
}

// --- Programa 4 ---
function mediaNotas() {
    let soma = 0;
    for(let i=1;i<=10;i++){
        let nota;
        do { nota = parseFloat(prompt(`Digite a nota ${i}: `)); }
        while(isNaN(nota) || nota < 0 || nota > 10);
        soma += nota;
    }
    const media = soma/10;
    console.log(`Média: ${media.toFixed(2)} - ${media>=6?"APROVADO":"REPROVADO"}`);
}

// --- Inicia o menu ---
menu();