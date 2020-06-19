// Challenge
// Créer un programme registorValidator.js qui demande à l’utilisateur un username, 
// un mot de passe et un email.

// le username doit être composé que de lettres, tirets et nombres

// le mot de passe contient au moins 6 caractères (avec au moins une lettre et un chiffre) 

// et peut contenir une virgule, un point et un tiret.
// Votre programme va effectuer ses 3 étapes et retournera un string de confirmation : “ok” si le string est conforme, 
// autrement il retournera “error”.

var registorValidator =  {
    username : (function (params) {
        const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
        const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
        const allUniqueChars = [..."_-"];
        const allNumbers = [..."0123456789"];
        const base = [...allCapsAlpha,...allLowerAlpha,...allUniqueChars,...allNumbers];
        let spy = [...params].filter(function(word) {
            return !base.includes(word);
        });
        return ( spy.length == 0 ? true : false);
    }),
    password : (function (params) {
        const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
        const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
        const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
        const allNumbers = [..."0123456789"];
        const base = [...allCapsAlpha,...allLowerAlpha,...allUniqueChars,...allNumbers];
        let spy1 = [...params].filter(function(word) {
            return ( allCapsAlpha.includes(word) || allLowerAlpha.includes(word) ? true : false) ;
        });
        let spy2 = [...params].filter(function(word) {
            return allNumbers.includes(word);
        });
        return ( spy1.length > 0 && spy2.length > 0 && [...params].length >= 6 ? true : false);
        
    }),
    email : (function (params) {
        var spy = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return spy.test(params);
    })
    
};

// console.log(
//     registorValidator.username('sdds46_48')
// );

// console.log(
//     registorValidator.username(`è-""è(""_")`)
// );

// console.log(
//     registorValidator.email(`artu@fr4m3studio.com`)
// );