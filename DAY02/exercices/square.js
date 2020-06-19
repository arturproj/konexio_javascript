var debug = require('../../module/method/debug.js');

var square = (function(x){
    if( parseInt(x) ){
        x=parseInt(x)**2;
        return x;
    }
    return false;
});

debug.info( square(5) );