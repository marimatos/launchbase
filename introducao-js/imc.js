// Cálculo do IMC

const nome = 'Marina';
const peso = 58.6;
const altura = 1.69;

const imc = peso / (altura * altura);

if ( imc >= 30 ) {
  console.log(`${nome} você está acima do peso!`);
} else  {
  console.log(`${nome} você não está acima do peso!`)
}

