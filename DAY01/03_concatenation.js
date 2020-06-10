var debug = require('../module/debug.js');

class todo {
    constructor(msg) {        
        debug.info( 'My name is ' + msg );
      }
}
var name = 'Tony';
new todo(name);