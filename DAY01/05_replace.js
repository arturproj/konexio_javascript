var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {    
        msg = msg.replace('ok', 'awesome');    
        debug.info( msg );
      }
}
var food =  'croissant is ok';
new todo(food);