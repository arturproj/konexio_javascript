var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {        
        debug.info( msg );
      }
}
var text = 'This is a string';
new todo(text);