/*=====================================
    OPERADORES DE COMPARAÇÃO

    >    Maior
    <    Menor
    >=   Maior ou igual a 
    <=   Menor ou igual a
    ==   Igual a 
    ===  Igual e do mesmo tipo
    !=   Diferente de 
    !==  Diferente , inclusive do tipo
=======================================*/

console.log(4 == "4");//Aqui ele está olhado só o valor, e não se é do mesmo tipo, no caso inteiro e string //true
console.log(4 === "4");//false pelo mesmo motivo
console.log(4 != "5");//true //é diferente o valor
console.log(4 !== "5");//true //é diferente o valor e o tipo

/*=====================================
    OPERADORES DE LÓGICOS

    &&     "E" As duas condições devem
           ser verdadeiras para que a condição 
           final seja verdadeira.
    ||     "OU" Uma das condições deve ser
            verdadeira para que a condição
            final seja verdadeira.
    !       "NÃO" ou Negação , nega uma condição
=======================================*/

console.log(5 == 5 && 6 == 6);//Aqui ele está olhado se as duas afirmativas são verdadeiras //true
console.log(5 == 5 && 6 != 6);//Como uma é falsa , ele se torna inteira falsa //false

console.log(5 != 5 || 6 == 6);//true pq uma condição é verdadeira //true
console.log(5 == 5 || 6 != 6);//true pq uma condição é verdadeira //true

console.log(!(5 > 6));//Negando o falso , ele vira verdadeira //true
console.log(!(5 < 6));//Negando o verdadeiro , ele vira falso //false