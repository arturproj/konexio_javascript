// Challenge
// Créer le fichier vowelCount.js.

// En JavaScript, utiliser la fonction vowelCount(str) qui prend en paramètre la variable str et retourne le nombre de voyelles dans un string (ex : “Les roses sont rouges” devrait retourner 7).

// Echantillon de tests
// Input:“hello”

// Output:2

// Input:“konexio”

// Output:4

// Indice
// Un simple boucle qui passera sur chaque lettre et gardera en mémoire le compte suffira.

// Bonus
// Faire le même exercice en utilisant les expressions régulières (RegExp) pour récupérer la liste des voyelles dans un string.

var vowelCount = (function(string){
    var spy_string = /[a,e,i,o,u,y]/g; 
    var res = string.match(spy_string);
    return [res,res.length];
});

console.log(
    vowelCount('hello')
    );

