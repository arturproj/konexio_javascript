var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier letterCount.js.

// En Javascript, créer une fonction letterCount(str, search)qui prend en paramètre str 
// un string et search un string d’une lettre et qui retournera le nombre de fois que 
// la lettre search sera dans la phrase. Par exemple :

// str = Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this
// search = ‘i’
// devrait retourner 6 parce qu’il y a 6 lettres i dans la phrase.

// Echantillon de tests
// Input:

// str = “Hello apple pie”
// search = o
// Output: 1

// Input:

// str = “Hello apple pie”
// search = p
// Output: 3

// Indice
// Utiliser un tableau associatif (object)

var letterCount = (function (str,i) {
    return str.search(i);
});

debug.info( letterCount('Utiliser un tableau associatif','a') );