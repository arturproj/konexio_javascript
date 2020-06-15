/**
 * Challenge
 * Créer le fichier wordCount.js.
 * 
 * En JavaScript, utiliser la fonction wordCount(str) qui prend comme paramètre un str et retournera le nombre de mots du string. Ex : Never eat shredded wheat or cake retournera 6
 * 
 * Echantillon de tests
 * Input:“Hello World”
 * 
 * Output:2
 * 
 * Input:“one 22 three”
 * 
 * Output:3
 * 
 * Indice
 * Convertir la liste de mots en une liste avec pour séparateur l’espace peut aider.  
 */
var wordCount = (function(string){
    string = string.split(" ");
    return string.length;
});

console.log(
    wordCount('hello world')
    );


    console.log(
        wordCount('one 22 three')
        );
    