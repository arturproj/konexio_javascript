var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {
        msg = msg.length;
        debug.info( 'Text length : ' + msg.toString() );
      }
}
var name = 'Tony';
new todo(name);