var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {    
        msg = Math.round(msg);      
        debug.info( `Math.round is ${msg}` );
      }
}
var num =  1.5;
new todo(num);