var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier firstReverse.js.

// En utilisant le language JavaScript, vous devrez écrire une fonction firstReverse(str) prenant en paramètre un string et qui nous renverra cette string en ordre inverse. Par example: si nous avons en entrée le string "Hello World and Coders" alors votre fonction retournera cette string: sredoC dna dlroW olleH.

// Interdiction
// Ne pas utiliser la méthode Array.reverse()
// Echantillon de test
// Input:“konexio”

// Output:“oixenok”

// Input:“I Love Code”

// Output:“edoC evoL I”

var firstReverse = (function(x){
    
        var str='';
        for(var i=x.length-1;i >= 0;i--){
            str += x[i];
            //debug.error(i +' | '+str);            
        }
        return {string:str,source:x};
    
});
debug.info( firstReverse('konexio') );
debug.done('///////////////==============');
debug.info( firstReverse('edoC evoL I') );