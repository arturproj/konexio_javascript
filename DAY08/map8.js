// Challenge 8
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

var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function(elem){
    elem.fullName = elem.firstName + ' ' + elem.surname;
    return elem;
});

console.log(arr2);