var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier swap.js

// Écrire une fonction swap(first, second) qui prend en paramètre 2 variables, et qui intervertira leurs valeurs respectives. 
// first vaudra la valeur initiale de second, et vice versa. La fonction retournera un array (tableau) avec pour valeur :

// return [first, second];
// Echantillon de tests
// Input: first = 25 second = 30

// Output: first = 30 second = 25

// input: first = 123 second = 456

// Output: first = 456 second = 123

var swap = (function(x,y){
    return [y,x];        
});
var swap_1 = (function(x,y){
        x = [y][y = x, 0];
            return [x,y];        
});
var swap_2 = (function(array){
    return [array[1],array[0]];        
});
var swap_3 = (function(arraya){
    array[0] = [array[1]][array[1] = array[0], 0];
        return array;        
});
debug.info( swap(4,8) );

