var debug = require('../module/method/debug.js');
var list = [
    'croissant is done',
    'croissant is ok',
    'croissant is error'
];

list.forEach((text) => {
    debug.info('stringLength : '+text.length); 
});