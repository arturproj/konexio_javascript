var debug = require('../module/debug.js');

class todo {
    constructor(msg) {    
        debug.info( `n.length is ${msg}` );
    }
}
var n = 512;  
new todo(n.length);
n = n.toString();  
new todo(n.length);