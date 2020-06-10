var debug = require('../module/debug.js');

var firstFactorial = (function(x){
    if( parseInt(x) ){
        tot =x;
        for(var i=x-1;i > 0;i--){
           tot = tot *i;
            debug.error(i +' | '+tot);            
        }
        return {tot:tot,index:x};
    }
    return false;
});
debug.info( firstFactorial(4) );
debug.done('///////////////==============');
debug.info( firstFactorial(8) );