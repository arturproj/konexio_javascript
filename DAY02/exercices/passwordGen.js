var debug = require('../../module/method/debug.js');

    // Challenge 1
    // Créer un fichier passwordGen.js.
    
    // En utilisant le language JavaScript, vous devrez créer une fonction passwordGen(num), 
    // qui prend en paramètre un entier qui sera compris entre 6 et 15 et qui va générer de manière aléatoire,
    // un mot de passe de la taille de cet entier. Le mot de passe qui sera retourné sera composé uniquement de lettres majuscules. 
    // Si votre paramètre n’est pas compris entre 6 et 15, votre fonction retournera ‘erreur de taille’.
    
    // Echantillon de tests
    // Input: 8
    
    // Output:
    
    // DFKJUNAQ

    var passwordGen = (function(length){
        if( 6 > length || length > 15 ){
            return 'erreur de taille';
        }
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    });

debug.info( passwordGen(4) );
debug.info( passwordGen(8) );
debug.info( passwordGen(20) );