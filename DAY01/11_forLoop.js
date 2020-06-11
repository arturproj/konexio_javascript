var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {  
        var total=0;   
        for (var i = 0; i < msg; i++) {  
            total += i; 
            debug.info( `step ${i}` );  
        }  
        debug.done( `total : ${total}` );
        return;
    }
}
new todo(10);
