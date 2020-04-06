/*-------------------------------------------------
1 - Crie um programa que armazena um array de usuários (objetos),
cada usuário tem um nome e suas tecnologias (novo array).

2 - Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.
Crie uma função que recebe os dados de um objeto de usuário e retorna SE
o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
--------------------------------------------------*/

//Variáveis
const developers = [
  {
    name: 'Fabricio',
    techs: ['JavaScript', 'CSS', 'Html']
  },
  {
    name: 'Juan',
    techs: ['Python', 'C++', 'C#']
  },
  {
    name: 'Emilio',
    techs: ['C', 'Php', 'Node.js']
  }
]

//laço para percorrer o array , imprimindo os valores 
for (let developer of developers) {
  console.log(`${developer.name} work with ${developer.techs.join(',')}`)
}

//função para a buscar de usuário de CSS
function UserCheckForCss(developer) {
  for (let tech of developer.techs) {
    if (tech == 'CSS') {
      return true
    }
  }
  return false
}

//Impressão
for (let i = 0; i < developers.length; i++) {
  const UserWorkWithCss = UserCheckForCss(developers[i]);

  if (UserWorkWithCss) {
    console.log(`The User ${developers[i].name} Work with CSS`);
  }
}

