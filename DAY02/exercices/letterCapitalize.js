var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier letterCapitalize.js.

// Le défi du jour se nomme letterCapitalize version 1:

// Il consiste à creer une fonction letterCapitalize qui prendra en paramètre la variable sentence qui sera un string, et qui transformera chaque première lettre de chaque mot en majuscule au sein de ce string.

// Interdiction
// Ne pas utiliser de Regex
// Ne pas utiliser .replace
// Résultat attendu
// var test = "bring your umbrella";

// Nous appliquerons la fonction letterCapitalize(test);

// Résultat :

// Bring Your Umbrella
// Sample
// Input	Output
// what a wonderful world	What A Wonderful World
// bring your umbrella	Bring Your Umbrella
// sweet like honey green like money	Sweet Like Honey Green Like Money
// Astuces pour résoudre l’exercice
// la fonction split(); permet de transformer votre string en tableau,

// Délimiter par le caractere de votre choix. Ex : split(" ");

// Nous utilisons le délimiteur " " qui aura pour consequence de diviser notre string en tableau de string (tableau de mots).

// la fonction substr(); retourne un sous string de l’original, d’une position particuliere jusqu’a une certaine taille.

// var test = "hello paris";
// test.substr(0, 1);
// Ici la fonction substr va récupérer le ‘h’ qui correspond au premier caractère.

// Conclusion
// Les strings en JavaScript sont immuables : Ils ne peuvent pas être manipulés directement, 
// nous les convertissons en tableaux avant de les reconvertir en string, et nous utilisons des variables pour cela.

var letterCapitalize = {
    sam : (function(string){
        debug.info(string.length);
        string = string.toLowerCase().split(" ");
        for (var key in string) {
            //debug.info(string[key].charAt(0).toUpperCase());
            //debug.info(string[key].substring(1));
            string[key]= string[key].charAt(0).toUpperCase() + string[key].substring(1);        
        }
        
        return string.join(" ");        
    }),
    avn : (function(string){
        debug.info(string.length);
        string = string.toLowerCase().split(" ");
        for (var key in string) {
            if(string[key].length > 1){
                //debug.info(string[key].charAt(0).toUpperCase());
                //debug.info(string[key].substring(1));
                string[key]= string[key].charAt(0).toUpperCase() + string[key].substring(1); 
            }            
        }        
        return string.join(" ");       
    }),
}; 

debug.done( letterCapitalize.sam("wHaT a WoNdErFuL wOrLd") );
debug.done( letterCapitalize.avn("wHaT A WoNdErFuL wOrLd") );