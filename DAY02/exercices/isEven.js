var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier qui s’appellera isEven.js

// Créer une fonction isEven avec pour paramètre la variable num qui contiendra un chiffre.

// L’objectif sera d’écrire une fonction qui nous renverra 
// le booléen true si le nombre passé en paramètre est pair, 
// ou false s’il est impair.

var isEven = (function(x){
    if( parseInt(x) ){
        
            return (x %2 == 0 ?  true : false);        
    }
    return null;
});

debug.info( isEven(4) );

debug.info( isEven(13) );

debug.info( isEven(3.5) );