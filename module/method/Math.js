const debug = require('./debug.js');

Math.pow = (function(num, power){
        return (num ** power);
});
Math.sqrt = (function(num){var sum;
    for (let i = 0; i < num; i++) {
        sum = num / i;
        if( sum == i ){
            break;
        }            
    }
    return(num % sum == 0 ?  sum : 0); 
});
Math.round = (function(num){
    if( parseInt(num)+0.5 < parseFloat(num)){
        var res = parseInt(num)+1;
    }else{
        var res = parseInt(num);
    } 
    return res;  
});

debug.done( 'pow : ' + Math.pow(3,3) );
debug.info( 'round : ' + Math.round(3.4) +' | '+ Math.round(3.7) );
debug.error( 'sqrt : ' + Math.sqrt(144) );

module.exports = Math;