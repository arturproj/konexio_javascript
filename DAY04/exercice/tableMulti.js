var debug = require('../../module/method/debug.js');

// Challenge
// Ecrire un programme qui s’appelle tableMult.js qui affiche la table de multiplication d’un nombre.
// Le paramètre sera toujours un nombre positif.

// Echantillon de tests
// Input : node tablemult.js 3

// Output :

// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// 4 * 3 = 12
// 5 * 3 = 15
// 6 * 3 = 18
// 7 * 3 = 21
// 8 * 3 = 24
// 9 * 3 = 27
// 10 * 3 = 30
// Bonus
// Créer une fonction tableMult avec pour paramètre num qui sera appelé par le paramètre du programme : tableMult(process.argv[2]);

// Bonus 2
// S’il n’y a pas de paramètre, le programme affiche le message error

// Indice
// Vous avez plusieurs possibilités pour réaliser cet exercice, afficher un array, concaténer des strings. Le choix vous appartient.


function tableMult(num){    
    if ( parseInt(num) ){
        var arr = [];
        for (let i = 1; i <= 10; i++) {
            arr.push(`${parseInt(num)} * ${i} = ${(parseInt(num)*i)}`)           
        }
        console.log(arr)
    }else{
        console.log('N’y a pas de paramètre');
    }
    return;
}

    tableMult(
        Number(process.argv[2])
    )