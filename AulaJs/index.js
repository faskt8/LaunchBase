/* Criar um programa que calcula a média das notas entre os alunos
e envia a mensagem cálculo da média , se a média for maior que 5 
parabenizar a turma*/

//Para colocar uma variavel dentro de uma String , no caso nessa Frase
//usa-se duas cráses , no Exemplo a seguir está 3 modos de declarar Strings
const nome = 'Deborah'
const nome2= "Fabricio"
const nome3 = `Fabricio e ${nome}`

//console.log(nome3);

//Variáveis de Alunos e Notas
const aluno1 = 'Deborah'
const notaAluno01 = 9.8

const aluno2 = "Fabricio"
const notaAluno02 = 10

const aluno03 = 'Mirella'
const notaAluno03 = 3

//Cálculo da média das notas dos alunos
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3 

if (media > 5) {
    console.log(`A Média foi de :${media}. Parabéns!!!`)
} else{
    console.log("Média abaixo do esperado")
}

//console.log(media)
