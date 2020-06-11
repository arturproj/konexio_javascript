var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {        
        debug.info( 'My name is ' + msg );
      }
}
var name = 'Tony';
new todo(name);