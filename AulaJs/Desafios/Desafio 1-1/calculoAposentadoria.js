/*----------------------------
Crie um programa para calcular a aposentadoria de uma pessoa.
----------------------------*/

//Variáveis
const name = "Fabricio"
const sex = "M"
const age = 55
const contribution = 32

//Condição de Aposentadoria
//Calculo na condição
if (sex == "F") {
  if ((contribution + age < 85) || (contribution == 30)) {
    console.log(`${name} você ainda não pode se aposentar!`)
  } else {
    console.log(`${name} você já pode se aposentar!`)
  }
}
if (sex == "M") {
  if ((contribution + age < 95) || (contribution == 35)) {
    console.log(`${name} você ainda não pode se aposentar!`)
  } else {
    console.log(`${name} você já pode se aposentar!`)
  }
}
