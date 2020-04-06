//Como funciona um vetor em JavaScript
//Basta criar a variável com "[]", e dentro por seus ojetos
// que é como é chamado suas características

                /*ARRAY*/

//aqui criado o vetor Alunos, com o Objeto e suas características
const  alunos = [
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

/*Então para acessarmos os valores dentro do vetor de objetos não passamos
mais o Objeto.atributo, e sim o indice do vetor ,"LEMBRANDO QUE VETOR COMEÇA DO INDICE '0'(zero)"
nesse caso Vetor de tamanho 3 vai de '0 à 2' */

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

console.log(alunos);

console.log(media);