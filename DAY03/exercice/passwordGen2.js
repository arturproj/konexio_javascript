var debug = require('../../module/method/debug.js');

    // Challenge - Bonus
    // Créer un fichier passwordGen2.js.
    
    // En utilisant le language JavaScript, vous devrez créer une fonction passwordGen2(num), 
    // qui prend en paramètre un entier qui sera compris entre 6 et 15 et qui va générer de manière aléatoire, 
    // un mot de passe de la taille de cet entier. Le mot de passe qui sera retourné sera composé uniquement de lettres majuscules. 
    // Si votre paramètre n’est pas compris entre 6 et 15, votre fonction retournera ‘erreur de taille’.
    
    // Vous devrez réaliser la fonction passwordGen2 en utilisant la table ASCII si vous ne l’aviez pas déjà fait.
    
    // Echantillon de tests
    // Input: 8
    
    // Output:
    
    // DFKJUNAQ

    var passwordGen = (function(length){
        if( 6 > length || length > 15 ){
            return 'erreur de taille';
        }
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            var randomNum = 0 + parseInt(Math.floor(Math.random() * (127 - 33 + 1) + 33));
            result += String.fromCharCode(randomNum);
        }
        return result;
    });

debug.info( passwordGen(4) );
debug.info( passwordGen(8) );
debug.info( passwordGen(20) );