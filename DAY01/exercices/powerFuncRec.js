var debug = require('../../module/method/debug.js');
var Math = require('../../module/method/Math.js');

// Challenge
// Créer un fichier powerFuncRec.js

// Le second challenge est de créer une nouvelle fonction powerFuncRec(num, power) mais de maniere récursive cette fois.

// La méthode Math.pow n’est pas autorisée.

// Echantillon
// Input: num = 3, power = 3
// Output: 27
// Indice
// Recursive = Rappel sa propre fonction
// Attention aux cas particuliers (puissances negatives, nulle)

var powerFuncRec = (function (array,n2) {
    array.forEach((x) => {
        if( parseInt(x) && parseInt(n2) ){
            var res = Math.pow(parseInt(x), parseInt(n2)) ;
            debug.info('math.pow ('+x+', '+n2+'): '+res);              
        }else{
            debug.error('I burned a clock because of you');
        } 
    });
    // if check 'is number' ?
         
});
var arr = [5,2,1,'banana'];
powerFuncRec(arr,3);