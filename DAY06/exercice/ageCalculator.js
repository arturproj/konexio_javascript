// Challenge
// En utilisant JavaScript, créer une fonction ageCalculator(date) 
// qui prend en paramètre une date au format string et retournera l’âge à partir de cette date. 

// Par exemple si la date est le January 31, 1980 11:20:00, 
// supposons que nous sommes le 14 janvier 2019, alors le résultat sera 38.

// Pensez à gérer les erreurs quand la date est un objet date et pas un string.

// Indice
// Vous pouvez comparer les dates avec les timestamp

var ageCalculator = function (dateU,dateL) {
    dateL = new Date(dateL);
    dateU = new Date(dateU);
    return ( dateL.getFullYear() - dateU.getFullYear() - 1 );
};
let courent_date = new Date();
console.log(
    ageCalculator('July 31, 1994',courent_date)
)