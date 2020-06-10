var debug = require('../module/debug.js');

var square = (function(x){
    if( parseInt(x) ){
        x=parseInt(x)*parseInt(x);
        return x;
    }
    return false;
});

debug.info( square(5) );