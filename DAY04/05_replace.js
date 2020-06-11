var debug = require('../module/method/debug.js');
var list = [
    'croissant A is ok',
    'croissant B is ok',
    'croissant C is ok'
];

list.forEach((name) => {
    debug.info('stringLength : '+name.replace('ok','amazing')); 
});