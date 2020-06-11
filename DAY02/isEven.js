var debug = require('../module/method/debug.js');

var isEven = (function(x){
    if( parseInt(x) ){
        
            return (x %2 == 0 ?  true : false);        
    }
    return null;
});

debug.info( isEven(4) );