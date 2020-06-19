var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier firstFactorial.js.

// En utilisant le language JavaScript, vous devrez écrire une fonction firstFactorial(num), qui fonctionne de maniere iterative, qui prend un nombre num en paramètre, et qui nous retournera la factorielle de celui ci. (e.g. si num = 4, return (4 * 3 * 2 * 1)). Pour vos tests, votre num sera compris entre 1 et 18, et sera toujours un entier.

// Echantillon de test
// Input:4

// Output:24

// Input:8

// Output:40320

var firstFactorial = (function(x){
    if( parseInt(x) ){
        tot =parseInt(x);
        debug.error(tot +' | '+tot); 
        for(var i=parseInt(x)-1;i > 0;i--){
           tot = tot *i;
            debug.error(i +' | '+tot);            
        }
        return {tot:tot,index:parseInt(x)};
    }
    return false;
});
debug.info( firstFactorial(4) );
debug.done('///////////////==============');
debug.info( firstFactorial(8) );