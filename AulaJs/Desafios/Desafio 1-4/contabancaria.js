/*-------------------------------------------------------------
Crie um programa para realizar operações bancárias na conta de um usuário.
Comece criando um objeto com o nome do usuário, suas transações e saldo.
As transações (transactions) devem iniciar como um array vazio [] e o 
saldo (balance) em 0 (zero).
--------------------------------------------------------------*/

// Operações bancárias
//Variáveis
const BankUser = {
  name: 'Fabricio',
  transactions: [],
  balance: 0
}

// Adicionar transações
function createTransaction(transaction) {
  BankUser.transactions.push(transaction)

  if (transaction.type === 'credit') {
      BankUser.balance = BankUser.balance + transaction.value
  } else {
      BankUser.balance = BankUser.balance - transaction.value
  }
}

// Relatórios
function getHigherTransactionByType(type) {
  let higherTransaction
  let higherValue = 0

  for (let transaction of BankUser.transactions) {
      if (transaction.type == type && transaction.value > higherValue) {
          higherValue = transaction.value
          higherTransaction = transaction
      }
  }

  return higherTransaction
}

function getAverageTransactionValue() {
  let sum = 0

  for(let transaction of BankUser.transactions) {
      sum += transaction.value
  }

  return sum / BankUser.transactions.length
}

function getTransactionsCount() {
  let count = {
      credit: 0,
      debit: 0,
  }
  for (let transaction of BankUser.transactions) {
      if (transaction.type === 'credit')
          count.credit++
      else
          count.debit++
  }

  return count
}

//Chamada das Funções
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })


//Impressoes
console.log(BankUser.balance) 

console.log(getHigherTransactionByType('credit')) 
console.log(getHigherTransactionByType('debit')) 

console.log(getAverageTransactionValue()) 

console.log(getTransactionsCount()) 

console.table(BankUser)