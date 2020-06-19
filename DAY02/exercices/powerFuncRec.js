var debug = require('../../module/method/debug.js');

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

var powerFuncRec = (function(obj, power){
        var res = [];
        obj.forEach((num) => {
            res.push((num ** power)); 
        });
        return res;
});

var arr = [5,2,1,-3,null];
debug.info( powerFuncRec(arr,3) );