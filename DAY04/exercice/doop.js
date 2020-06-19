var debug = require('../../module/method/debug.js');

// Challenge
// Ecrire un programme doop.js qui prend 3 paramètres :

// Le premier et le troisième sont des entiers positifs
// Le second est un opérateur arithmétique qui peut être : + - * / ou %
// Le Write a program doop.js that takes three parameters:

// The first and the third one are representations of base-10 signed integers
// The second one is an arithmetic operator chosen from: + - * / %
// Le programme doit afficher le résultat de l’opération arithmétique. 
// Si le nombre d’arguments n’est pas égale à 3, alors le programme affichera le message error.

// On supposera qu’il n’y aura aucune erreur dans les paramètres ou de caractères spéciaux. 
// Les nombres négatifs en entrée ou en sortie n’auront qu’un seul signe -

// Echantillons de tests
// node doop.js 5 + 4
// retournera 9.

// node doop.js 9 "*" 2 (garder les guillemets autour de l'étoile)
// retournera 18.

// node doop.js 11 + 4
// retournera 15.

// Indice
// Vous pouvez créer plusieurs fonctions. Une pour chaque opération arithmétique.

var doop = (function(n1,mod,n2){
    return eval(n1+mod+n2);
});

debug.log(
    doop(1,'+',2)
);