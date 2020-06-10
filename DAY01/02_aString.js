var debug = require('../module/debug.js');

class todo {
    constructor(msg) {        
        debug.info( msg );
      }
}
var text = 'This is a string';
new todo(text);