var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {    
        if (msg.toString().length >= 5) {  
            debug.info( `the password has more than five characters` );  
        } else {  
            debug.error( `the password has five characters or less` );  
        }  
       
    }
}
var password = 'azer';  
new todo(password);
debug.done('////////////=================');
var password = 'azerty';  
new todo(password);