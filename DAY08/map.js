// Challenge 1
console.log('Challenge 1','map1.js')
// Créer un fichier map1.js.

// Créer une variable arr avec un array [1, 2, 3, 4].
var arr = [1, 2, 3, 4];
// En utilisant Array.map(), créer arr1 qui additionnera chaque élément de l’array par 1.
var arr_map1 = arr.map(function(elem) {
    return elem+1;
  });
// Résultat attendu
// [2, 3, 4, 5]
console.log(arr,'=>',arr_map1)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 2
console.log('Challenge 2','map2.js')
// Créer un fichier map2.js.

// Créer une variable arr avec un array [1, 2, 3, 4].

// En utilisant Array.map(), créer arr2 qui additionnera chaque élément de l’array par 10.
var arr_map2 = arr.map(function(elem) {
    return elem+10;
});
// Résultat attendu
// [11, 12, 13, 14]
console.log(arr,'=>',arr_map2)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 3
console.log('Challenge 3','map3.js')
// Créer un fichier map3.js.

// Créer une variable arr avec un array ['m', 'n', 'o', 'p'].
arr = ['m', 'n', 'o', 'p'];
// En utilisant Array.map(), créer arr3 qui mettra en majuscule chaque lettre.
var arr_map3 = arr.map(function(elem) {
    return elem.toUpperCase();
});
// Résultat attendu
// ['M', 'N', 'O', 'P']
console.log(arr,'=>',arr_map3)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 4
console.log('Challenge 4','map4.js')
// Créer un fichier map4.js.

// Créer une variable arr avec un array [1, 2, 3, 4].
arr = [1, 2, 3, 4];
// En utilisant Array.map() et la fonction isEven (que vous copierez dans ce fichier), créer arr2 qui retournera si chaque élément est pair ou impair.
var isEven = (function(x){
    if( parseInt(x) ){        
            return ( parseInt(x) %2 == 0 ?  true : false);        
    }
    return null;
});
var arr_map4 = arr.map(function(elem) {
    return isEven(elem);
});
// Résultat attendu
// [false, true, false, true]
console.log(arr,'=>',arr_map4)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 5
console.log('Challenge 5','map5.js')
// Créer un fichier map5.js.

// Créer une variable arr avec un array ['pan', 'top', 'pal', 'tool'].
arr = ['pan', 'top', 'pal', 'tool'];
// En utilisant Array.map() et la méthode Array.reverse(), créer arr2 qui retournera l’anagramme de chaque mot.
var arr_map5 = arr.map(function(elem) {
    return [...elem].reverse().join("");
});
// Résultat attendu
// ['nap', 'pot', 'lap', 'loot']
console.log(arr,'=>',arr_map5)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 6
console.log('Challenge 6','map6.js')
// Créer un fichier map6.js.

// Créer une variable arr avec un array

// [{
//     firstName: 'Daniel',
//     surname: 'Beckham'
// }, {
//     firstName: 'David',
//     surname: 'Craig'
// }]
arr =[
    {
        firstName: 'Daniel',
        surname: 'Beckham'
    }, {
        firstName: 'David',
        surname: 'Craig'
    }
];
// En utilisant Array.map(), créer arr2 qui retournera un string du prénom et du nom.
var arr_map6 = arr.map(function(elem) {
    return elem.firstName + ' ' + elem.surname;
});
// Résultat attendu
// ['Daniel Beckham', 'David Craig']
console.log(arr_map6)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 7
console.log('Challenge 7','map7.js')
// Créer un fichier map7.js.

// Créer une variable arr avec un array

// [{
//     firstName: 'Daniel',
//     surname: 'Beckham'
// }, {
//     firstName: 'David',
//     surname: 'Craig'
// }]
// En utilisant Array.map(), créer arr2 qui retournera un string du prénom et du nom.
var arr_map7 = arr.map(function(elem) {
    return {fullName : elem.firstName+' '+elem.surname};
});
// Résultat attendu
// [{
//     fullName: 'Daniel Beckham'
// }, {
//     fullName: 'David Craig'
// }]
console.log(arr_map7)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 8
console.log('Challenge 8','map8.js')
// Créer un fichier map8.js.

// Créer une variable arr avec un array

// [{
//     firstName: 'Daniel',
//     surname: 'Beckham'
// }, {
//     firstName: 'David',
//     surname: 'Craig'
// }]
// En utilisant Array.map(), créer arr2 qui retournera un string du prénom et du nom.
var arr_map8 = arr.map(function(elem) {
    elem.fullName = elem.firstName+' '+elem.surname;
    return elem;
});
// Résultat attendu
// [{
//     firstName: 'Daniel',
//     surname: 'Beckham',
//     fullName: 'Daniel Beckham'
// }, {
//     firstName: 'David',
//     surname: 'Craig',
//     fullName: 'David Craig'
// }]
console.log(arr_map8)
///////////////////////////////////////////////////////////////////////////////////////////
// Challenge 9
console.log('Challenge 9','map9.js')
// Créer un fichier map9.js.

// Créer une variable arr avec un array

// ['apple', 'croissant', 'pear']
arr = ['apple', 'croissant', 'pear'];
// En utilisant Array.map(), créer arr2 qui retournera un string du prénom et du nom.
var arr_map9 = arr.map((item)=>
    `<li>${item}</li>`
);
// Résultat attendu
// ["<li>apple</li>", "<li>croissant</li>", "<li>pear</li>"]
console.log(arr_map9)