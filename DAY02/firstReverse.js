var debug = require('../module/debug.js');

var firstReverse = (function(x){
    
        var str='';
        for(var i=x.length-1;i >= 0;i--){
            str += x[i];
            //debug.error(i +' | '+str);            
        }
        return {string:str,source:x};
    
});
debug.info( firstReverse('oixenok') );
debug.done('///////////////==============');
debug.info( firstReverse('edoC evoL I') );