var debug = require('../module/method/debug.js');

class todo {
    constructor(msg) {              
        debug.info(msg);  
    }
}
var pets = ['cat', 'dog', 'mouse']; 
new todo(pets);
