// Challenge
// Créer le fichier alphabetSoup.js.

// En JavaScript, utiliser la fonction alphabetSoup(str). 
// Récupérer la paramètre dans la variable str et retourner un string avec les lettres en ordre alphabétique (ex : hello deviens ehllo). 
// Supposer que les nombres et la ponctuations ne sont pas incluses dans le string.

// Sample
// Input:“konexio”

// Output:“eiknoox”

// Input:“hooplah”

// Output:“ahhloop”

// Indice
// Utiliser la méthode Array.sort() sur le string pour effectuer le challenge

var alphabetSoup = (function(string){
    string = string.split("").sort();
    return string.join('');
});

console.log(
    alphabetSoup('hello')
);