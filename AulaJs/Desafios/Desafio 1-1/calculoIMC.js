/*----------------------------
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
-----------------------------*/
const name = "Fabricio"
const weight = 85
const height = 1.70

//Calculo
const imc = weight / (height * height)

//Condição se acima de 30 ou abaixo de 29.9
if (imc >= 30) {
  console.log(`${name} está acima do peso ideal !`)
} else {
  console.log(`${name} você não está acima do peso ideal !`)
}