var debug = require('../module/debug.js');

var passwordGen = {
    one : (function(length){
        if(6 > length ||length > 15){
            return 'erreur de taille';
        }
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }),
    two : (function(length){
        if(6 > length ||length > 15){
            return 'erreur de taille';
        }
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            var randomNum = 0 + parseInt(Math.floor(Math.random() * (127 - 33 + 1) + 33));
            result += String.fromCharCode(randomNum);
        }
        return result;
    }),

};

debug.info( passwordGen.one(4) );
debug.info( passwordGen.one(8) );
debug.info( passwordGen.one(20) );
debug.done('///////////////==============');
debug.info( passwordGen.two(4) );
debug.info( passwordGen.two(8) );
debug.info( passwordGen.two(20) );