var debug = require('../module/method/debug.js');

var power = {
    pow : (function(num, power){
        return (num ** power);
    }),
    rec_pow : (function(obj, power){
        var res = [];
        obj.forEach((num) => {
            res.push((num ** power)); 
        });
        return res;
    }),
    sqrt : (function(num, power){
        return num ** (1/power);       
    }),

};

debug.info( power.pow(2,3) );
var arr = [5,2,1];
debug.info( power.rec_pow(arr,3) );

// debug.info( power.sqrt(25,5) );
// debug.info( power.sqrt(16,2) );