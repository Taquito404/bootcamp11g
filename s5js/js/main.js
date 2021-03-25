
/*    Primera Parte
var phrase = "La mejor forma de predecir el futuro es creándolo"

1 saber la cantidad de palabras
2 saber la cantidad de "a"
3 crear una nueva frase usando solo los caracteres que estén en posiciones nones
4 crear una nueva frase usando solo los carácteres en posiciones pares
*/

var phrase = "La mejor forma de predecir el futuro es creándolo."

//1 saber la cantidad de palabras
var numberOfWords = phrase.split(' ').length;
console.log("La cantidad de palabras es: " + numberOfWords);

//2 saber la cantidad de "a"s
var numberOfAs = phrase.match(/[AáaÁ]/gi).length;
console.log("La cantidad de a´s es: " + numberOfAs)

//3 crear una nueva frase usando solo los caracteres que estén en posiciones nones
var oddWord = "";
for (var i = 0; i < phrase.length; i++) {
    if (i % 2 === 1) {
        oddWord += phrase.charAt(i);
    }
}
console.log("La nueva frase con letras impares es: " + oddWord)

//4 crear una nueva frase usando solo los carácteres en posiciones pares
var evenWord = "";
for (var i = 0; i < phrase.length; i++) {
    if (i % 2 === 0) {
        evenWord += phrase.charAt(i);
    }
}
console.log("La nueva frase con letras pares es: " + evenWord)

/*       Segunda Parte

    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/
//1.- Mostrar la misma frase en snake_case
console.log("snake_case: " + phrase.replace(/ /g, '_'));

//2.- Mostrar la misma frase en kebab-case
console.log("kebab-case: " + phrase.replace(/ /g, '-'));

//3.- Mostrar la misma frase con todas las vocales en mayúscula
var mayusc = phrase.replace(/a|e|i|o|u/gi, function (x) {
    return x.toUpperCase();
});
console.log("Vocales en mayúsculas: " + mayusc)

//4.- Mostrar los primeros 10 caracteres de la frase
var firstTen = "";
for (var i = 0; i < 10; i++) {
        firstTen += phrase.charAt(i);
}
console.log("Primeros 10 carácteres: " + firstTen)

//5.- Mostrar los últimos 10 caracteres de la fras
var lastTen = "";
for (var i = phrase.length; i >= (phrase.length - 10); --i) {
        lastTen += phrase.charAt(i);
}
console.log("Últimos 10 carácteres: " + lastTen)