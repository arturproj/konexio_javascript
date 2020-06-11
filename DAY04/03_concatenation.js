var debug = require('../module/method/debug.js');
var list = ['Tony','Mary','John'];

list.forEach((name) => {
    debug.info('My name is '+name); 
});