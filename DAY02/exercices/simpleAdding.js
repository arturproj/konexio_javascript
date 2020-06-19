var debug = require('../../module/method/debug.js');

// Challenge 1
// Créer un fichier simpleAdding.js.

// En utilisant le language JavaScript, vous devrez écrire une fonction simpleAdding(num) qui additionne tout les nombres en partant de 1 jusqu’au nombre num. Par exemple : si nous avons 4 en argument, alors notre fonction nous retournera 10 car 1 + 2 + 3 + 4 = 10. Pour tester votre fonction, n’utilisez que des nombres compris entre 1 et 1000.

// Echantillon de test
// Input:12 Output:78

// Input:140 Output:9870

var simpleAdding = (function(x){
    if( parseInt(x) ){
        var tot = 0;
        for(var i=1;tot < x;i++){
            tot += i
            //debug.error( i +' | '+tot);
        }
        return {tot:tot,max:x,index:i-1};
    }
    return false;
});
debug.info( simpleAdding(1000) );
debug.info( simpleAdding(78) );
debug.info( simpleAdding(9870) );