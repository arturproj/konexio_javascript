/* Challenge
 * En JavaScript, créer une fonction secondGreatLow(arr) qui prendra en paramètre un array de nombres stockés dans arr et retournera la deuxième valeur plus petite valeur et deuxième plus grande valeur. Par exemple [7, 7, 12, 98, 106] devrait retourner 12 et 98. L’array ne doit pas être vide and devra contenir au moins deux nombres. Cela peut devenir compliqué s’il n’y a que deux nombres.
 * 
 * Challenge 2
 * Utiliser le process.argv pour créer un programme qui récupère votre input et utilise cette fonction.
 * 
 * Echantillon de tests
 * Input:1, 42, 42, 180
 * 
 * Output:“42 42”
 * 
 * Input:4, 90
 * 
 * Output:“90 4” 
*/


let serialise = function (value){
    return [...value[0]];
};
let arrayUnique = function(array) {
    return array.filter(function(value, index) {
        return array.indexOf(value) === index;
    });
};

function secondGreatLow(array) {   
    array = array.map(function (x) { 
        return parseFloat(x);         
    });
    array = array.sort((a, b) => a - b);
    array = arrayUnique(array);
    if ( array.length == 0 ) {
        return [0,0];
    } else if ( array.length < 2 ) {
        return array;
    } else {
        return [array[1],array[array.length-2]];
    }
}

function inArgv(input) {
    if ( input.length > 0){
        return ( Array.isArray(input) && input.length > 1 ) ? secondGreatLow(input) : secondGreatLow(serialise(input));
    }else{
        return 'N’y a pas de paramètre';
    }
   // 
}

var myArgs = process.argv.slice(2);

console.log(
    inArgv(
        [...myArgs]
        )
);

// λ node secondGreatLow.js 1648648644544
// [ 4, 6 ]
// λ node secondGreatLow.js 1 45 84 17 63 2 45
// [ 2, 63 ]