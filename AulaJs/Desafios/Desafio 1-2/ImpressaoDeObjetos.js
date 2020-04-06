/*--------------------------------------------------------------
Crie um programa que armazena dados da empresa Rocketseat dentro
de um objeto chamado empresa. Os dados a serem armazenados são:
--------------------------------------------------------------*/
//Variáveis
const company = {
  name: "Rocketseat",
  color: "Roxo",
  focus: "Programação",
  address: {
    street: "Rua Guilherme Bengala",
    number: 260
  }
}

//Impressão
console.log(`A Empresa ${company.name} está localizada na ${company.address.street} no número ${company.address.number}!`)