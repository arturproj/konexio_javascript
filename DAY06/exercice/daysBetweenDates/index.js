// Challenge
// En utilisant JavaScript, créer un dossier qui s’appelle daysBetweenDates, 
// dans ce dossier, faîtes un npm init et créer deux fichiers.

// index.js
// getTimePassed.js
// Le fichier index.js appellera le module getTimePassed qui retournera une fonction. 
// La fonction getTimePassed() du module prend deux arguments : date1 et date2 et qui retournera le nombre de jour et les minutes entre les deux dates. 
// Les arguments seront des Date au format string.

// Echantillon de tests
// node index.js "December 27, 1987 11:20:00" "December 28, 1987 11:20:00"
// devrait retourner

// Days passed: 1, minutes passed: 0

const getTimePassed = require('./module');

var myArgs = process.argv.slice(2);

console.log(
    getTimePassed(
        new Date(myArgs[0]),
        new Date(myArgs[1])
        )
);