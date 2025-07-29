alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
} 


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


/*
if(tentativas >1) {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/
/*
let palavraPessoa = quantidadePessoas == 1 ? 'pessoa' : 'pessoas';
*/



/* let palavraPessoa = "";

if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
} */



// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

/*
let contador = prompt('Escolha um número:');

let contagem = 0;

while (contador >= contagem) {
  console.log(contador);
  contador--;
}
*/


//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

/*
let contador = prompt('Escolha um número:');

contagem = 0;

while (contador >= contagem) {
    console.log(contagem);
    contagem++;
}
*/

/*
let nome = 'Leilanny Rodrigues';
alert(`Olá, ${nome}!`);
let linguagem =prompt('Qual linguagem de programação você está estudando?');
console.log(linguagem);
*/

/*
let valor1 = 10;

let valor2 = 20;

let resultado = (`${valor1 - valor2}`);

console.log(`A diferença de ${valor1} e ${valor2} é ${resultado}`);
*/

/*
let idade = prompt('Qual sua idade?');
if (idade >= 18) {
    console.log('Você pode dirigir');
} else {
    console.log('Você não pode dirigir');
}
*/
/*
let numero = prompt('Escolha um número:');

if (numero > 0) {
    alert('O número é positivo');
} else if (numero < 0) {
    alert('O número é negativo');
} else {
    alert('O número é zero');
}
*/
/*
let numeros = 1;

while (numeros <=10) {
    console.log(numeros);
    numeros++;
}
*/
/*
let nota = 4;

if (nota >=7) {
    console.log('Aprovado');
} else if (nota >=5){
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
*/
/*
let numeroAleatorio = Math.random() 
console.log(numeroAleatorio);
*/



