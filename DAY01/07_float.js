var debug = require('../module/debug.js');

class todo {
    constructor(msg) {    
        msg = parseFloat(msg);    
        debug.info( `Float is ${msg}` );
      }
}
var num =  "300.99 $ nous avons gagné ";
new todo(num);