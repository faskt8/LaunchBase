/*---------------------------------------------------
Crie um programa que calcula a sum de revenue e 
expenses de usuários e no fim retorna o balance 
(revenue - expenses).

1 - Percorra o array de usuários e para cada usuário 
chame uma função chamada calculaSaldo que recebe como
parâmetro as revenue e expenses do usuário
----------------------------------------------------*/

//Variáveis
const users = [
  {
    name: "Salvio",
    revenue: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenue: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenue: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]

//função de Calculo de Saldo
function calculaSaldo(revenue, expenses) {
  const sumReceitas = sumNumeros(revenue)
  const sumDespesas = sumNumeros(expenses)

  return sumReceitas - sumDespesas
}

//função sum 
function sumNumeros(numbers) {
  let sum = 0

  for (let number of numbers) {
    sum = sum + number
  }

  return sum
}

for (let user of users) {
  const balance = calculaSaldo(user.revenue, user.expenses)

  if (balance > 0) {
    console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
  } else {
    console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
  }
}