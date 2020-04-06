/*------------------------------------------------------------
Dica para melhorar o código:

-Limpar comentários desnecessários
- Se o código está sem ; no final de cada linha
retire todos, deixe-o uniforme

- Identar o código:
- ctrl + A
- shift + tab para tirar identação
- ctrl + shift + p e escolha format selection

- Dar um espaço de diferença a cada bloco de código
- Deixar as funções todas juntas e as chamadas também 

- Deixar o código em inglês , primordial para nossa área
--------------------------------------------------------------*/


//Marcar student como flunked se a nota for
//menor que 5. e , também enviar uma mensagem.

const classA = [
    {
        name: 'Mayk',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Fabricio',
        grade: 2
    }
]

const classB = [
    {
        name: 'José',
        grade: 1.9
    },
    {
        name: 'João',
        grade: 4
    },
    {
        name: 'Deborah',
        grade: 2
    }
]

//Criando a função , passamos o nome da mesma, e entre parenteses o parametro que desejamos
//Nesse caso o vetor chamado "ALUNOS", para que possamos pegar as notas desse vetor
//e usamos uma estrutura de repetição chamada "FOR" para percorrer nosso array
function CalculeteAverage(students) {
    let sum = 0
    //students.length é o tamanho do aarrya students
    //let para variáveis que podem ser modificadas
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade

    }
    const average = sum / students.length
    return average
}

//agora a função para verificar se a média é maior que 5
//passamos a average como parametro para poder usar dentro da função
function SendMessage(average, classes) {
    //Se a média for maior que 5 , parabeniza a class
    if (average > 5) {
        console.log(`The average for ${classes} were :${average}. Congratulations!!!`)
    } else {
        console.log(`The average their ${classes} was not good!`)
    }
}


function MarkAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
    //mostar uma tabela do array
    //console.table(students)
}

function SendMessageFlunked(student) {
    //ver se o student está flunked ou não
    //como student.flunked já está como true
    //vide function MarkAsFlunked
    //não preciso fazer student.flunked == true
    if (student.flunked) {
        console.log(`The student ${student.name} is  flunked!`)
    }
}

function StudentsNotApproved(students) {
    //for of é um novo laço do JS
    //ele quer dizer
    //Para cada Aluno da lista de Alunos
    //liste os students até o fim
    for (const student of students) {
        MarkAsFlunked(student)
        SendMessageFlunked(student)
    }
}
//chamando a função para calcular a average
//então criamos uma variável que recebe esse retorno e usamos o console para imprimir na tela
const average01 = CalculeteAverage(classA)
const average02 = CalculeteAverage(classB)

//Impressão
SendMessage(average01, 'Class A')
SendMessage(average02, 'Class B')

//chamada das funções AlunoReprovado
StudentsNotApproved(classA)
StudentsNotApproved(classB)

