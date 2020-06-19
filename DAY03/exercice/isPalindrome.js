// Challenge
// Créer le fichier palindrome.js.

// En utilisant le JavaScript, créer une fonction palindrome(str) qui prend le paramètre str 
// et retourne true sur le le paramètre est un palindrome (un texte qui se lit pareil à l’endroit comme à l’envers), 
// autrement la fonction retourne false. Par exemple : racecar donne racecar à l’envers. 
// Les ponctuations et les nombres ne seront pas considérés.

// Interdiction
// Ne pas utiliser la méthode Array.reverse()
// Echantillon de tests
// Input:“never odd or even”

// Output: true

// Input:“eye”

// Output: true

var reverse = (function (string) {
    console.log( string );
    string = string.split("");var spy_key = [];
    for (var key in string) {
        if(string[key] == ' '){spy_key[key]=1;string.splice(string.indexOf(string[key]),1);}else{spy_key[key]=0;}
        
    }var str = '';var k = 0;
    for(var i=string.length-1;i >= 0;i--){
        if(spy_key[k] != 0 ){str += ' '+string[i];}else{str += string[i];}
        k++;
    }
    return str;
});

var palindrome = (function (string) {
    return ( string == reverse(string) ? true : false )
});

console.log( palindrome('never odd or even') );