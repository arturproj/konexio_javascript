var debug = require('../../module/method/debug.js');
var Math = require('../../module/method/Math.js');

// Challenge
// Créer un fichier powerFuncIter.js

// Le premier challenge est de créer une fonction iterative powerFuncIter(num, power), qui prend 2 entiers en paramètre, et qui renverra une puissance d’un nombre.

// La méthode Math.pow n’est pas autorisée.

// Sample
// Input: num = 3, power = 3
// Output: 27
// Indice
// Iterative = boucle
// Attention aux cas particuliers (puissances negatives, nulle)

var powerFuncIter = (function (n1,n2) {
    // if check 'is number' ?
    if( parseInt(n1) && parseInt(n2) ){
        var res = Math.pow(parseInt(n1), parseInt(n2)) ;
        debug.info('math.pow ('+n1+', '+n2+'): '+res);              
    }else{
        debug.error('I burned a clock because of you');
    }          
});
var num1 = 2;
var num2 = 2;
powerFuncIter(num1,num2);
debug.done('////////////=================');    
var num1 = 67;
var num2 = 1;
powerFuncIter(num1,num2);
debug.done('////////////=================');    
var num1 = 370;
var num2 = 67;
powerFuncIter(num1,num2);
debug.done('////////////=================');    
var num1 = 'banana';
var num2 = 67;
powerFuncIter(num1,num2);
debug.done('////////////=================');    
var num1 = 2;
var num2 = -3;
powerFuncIter(num1,num2);