/* Criar um programa que calcula a média das notas entre os alunos
das turmas e envia a mensagem cálculo da média , se a média for maior que 5 
parabenizar a turma*/

const  alunosDaTurmaA = [
    {
        nome:'Mayk',
        nota: 9.8
    },

    {
        nome:'Diego',
        nota: 10
    },

    {
        nome:'Fabricio',
        nota: 2
    }
]

const  alunosDaTurmaB = [
    {
        nome:'José',
        nota: 1.9
    },

    {
        nome:'João',
        nota: 4
    },

    {
        nome:'Deborah',
        nota: 2
    }
]

//Criando a função , passamos o nome da mesma, e entre parenteses o parametro que desejamos
//Nesse caso o vetor chamado "ALUNOS", para que possamos pegar as notas desse vetor
//e usamos uma estrutura de repetição chamada "FOR" para percorrer nosso array
function CalculaMedia(alunos) {
    let soma = 0;
    //alunos.length é o tamanho do aarrya alunos
    //let para variáveis que podem ser modificadas
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
        
    }
    const media = soma / alunos.length;
    return media;
}

//chamando a função para calcular a media
//se deixarmos assim , não temos como imprimir nosso valores
//CalculaMedia(alunosDaTurmaA);
//CalculaMedia(alunosDaTurmaB);

//então criamos uma variável que recebe esse retorno e usamos o console para imprimir na tela
const media01 = CalculaMedia(alunosDaTurmaA);
const media02 = CalculaMedia(alunosDaTurmaB);

//impressão
//console.log(media01);
//console.log(media02);

//agora a função para verificar se a média é maior que 5
//passamos a media como parametro para poder usar dentro
//da função
function EnviaMenssagem(media,turma) {
    //Se a média for maior que 5 , parabeniza a turma
    if (media > 5) {
        console.log(`A Média da turma ${turma} foi de:${media}. Parabéns!!!`)
    } else{
        console.log(`A Média da turma ${turma} abaixo do esperado`)
    }
}

//Impressão
 EnviaMenssagem(media01,'turmaA');
 EnviaMenssagem(media02,'turmaB');