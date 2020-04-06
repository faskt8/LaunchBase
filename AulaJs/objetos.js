//Como funciona um objeto em JavaScript
//Basta criar a variável com "{}", e dentro por seus atributos
// que é como é chamado suas características

const aluno01 = {
    nome:"Mayk",
    nota: 9.8
}

const aluno02 = {
    nome:"Diego",
    nota: 10
}

const aluno03 = {
    nome:"Fabricio",
    nota: 2
}

//Para acessar seus atributos agora usamos o Nome da variável
//agora sendo um Objeto seguido do "." e o seu atributo
// sendo assim fica Objeto.atributo
const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

console.log(media);