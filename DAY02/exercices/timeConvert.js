var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier timeConvert.js.

// En utilisant le language JavaScript, vous devrez écrire une fonction timeConvert(num) qui prend en paramètre un nombre num de secondes,
// et qui retournera la conversion de ce nombre en heures, minutes et secondes (example: si num = 63 alors la fonction retournera 0:1:3). 
// Vous separerez le nombre d’heure du nombre de minute du nombre de seconde grâce au symbole ':' .

// Interdiction
// Ne pas utiliser l’objet Date
// Echantillon de tests
// Input:126

// Output:“0:2:6”

// Input: 3700

// Output: 1:1:40

// Indice
// Diviser le nombre de minutes par 60 vous donnera le nombre d’heures, et pour obtenir le nombre de minutes restantes, relisez le cours du Modulo !

// Il est possible de passer d’un décimal a un entier facilement :

// La méthode Math.floor arrondit au dessous.
// La méthode Math.ceil arrondit au dessus.

var timeConvert = (function(x){
    if( parseInt(x) ){
        var hours = Math.floor(parseInt(x) / 60 / 60);
        var minutes = Math.floor(parseInt(x) / 60) - (hours * 60);
        var seconds = parseInt(x) % 60;      
    }
    return hours + ':' + minutes + ':' + seconds;
});

debug.info( timeConvert(126) );
debug.info( timeConvert(3700) );