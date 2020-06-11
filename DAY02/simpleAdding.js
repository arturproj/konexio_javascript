var debug = require('../module/method/debug.js');

var simpleAdding = (function(x){
    if( parseInt(x) ){
        var tot = 0;
        for(var i=1;tot < x;i++){
            tot += i
            //debug.error( i +' | '+tot);
        }
        return {tot:tot,max:x,index:i-1};
    }
    return false;
});
debug.info( simpleAdding(1000) );
debug.info( simpleAdding(78) );
debug.info( simpleAdding(9870) );