var debug = require('../module/debug.js');

class todo {
    constructor(msg) {    
        msg = parseInt(msg);    
        debug.info( `Int is ${msg}` );
      }
}
var num =  1.02648;
new todo(num);