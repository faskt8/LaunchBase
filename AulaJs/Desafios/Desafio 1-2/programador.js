/*-------------------------------------------------------------------
Crie um programa com um objeto para armazenar dados
de um programador como name, idade e tecnologias que trabalha.
Um programador pode trabalhar com várias tecnologias, 
por isso armazene essas tecnologias em um array.
As tecnologias também devem ser objetos contendo name e specialty
---------------------------------------------------------------------*/
//Variáveis
const developers = {
  developer01: {
    name: "Fabricio",
    age: 32,
    languages: [
      { name: 'C++', specialty: 'Desktop' },
      { name: 'Python', specialty: 'Data Science' },
      { name: 'JavaScript', specialty: 'Web/Mobile' }
    ]
  },

  developer02: {
    name: "Juan",
    age: 20,
    languages: [
      { name: 'C++', specialty: 'Desktop' },
      { name: 'Python', specialty: 'Data Science' },
      { name: 'JavaScript', specialty: 'Web/Mobile' }
    ]
  }
}

//Impressão
console.log(`O programador ${developers.developer01.name} tem ${developers.developer01.age} e usa a tecnologia ${developers.developer01.languages[0].name} 
com especialidade ${developers.developer01.languages[0].specialty}`)