var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier powerFuncIter.js

// Le premier challenge est de créer une fonction iterative powerFuncIter(num, power), 
// qui prend 2 entiers en paramètre, et qui renverra une puissance d’un nombre.

// La méthode Math.pow n’est pas autorisée.

// Sample
// Input: num = 3, power = 3
// Output: 27
// Indice
// Iterative = boucle
// Attention aux cas particuliers (puissances negatives, nulle)

var powerFuncIter = (function(num, power){
    return (num ** power);
});

debug.info( powerFuncIter(3,3) );