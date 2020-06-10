var debug = require('../module/debug.js');

class todo {
    constructor(msg) {
        msg = msg.length;
        debug.info( 'Text length : ' + msg.toString() );
      }
}
var name = 'Tony';
new todo(name);