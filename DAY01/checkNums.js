var debug = require('../module/debug.js');

class todo {
    constructor(n1,n2) {
        // if check 'is number' ?
        if( parseFloat(n1) && parseFloat(n2) ){
            if(parseFloat(n1) > parseFloat(n2)){
                debug.info('num1 is greater than num2');
            }else if(parseFloat(n1) < parseFloat(n2)){
                debug.info('num1 is lower than num2');
            }else{
                debug.info('num1 equal num2');
            }
        }else{
            debug.error('I burned a clock because of you');
        }    
    }
}
var num1 = 3;
var num2 = 122;
new todo(num1,num2);
debug.done('////////////=================');    
var num1 = 67;
var num2 = 67;
new todo(num1,num2);
debug.done('////////////=================');    
var num1 = 370;
var num2 = 67;
new todo(num1,num2);
debug.done('////////////=================');    
var num1 = 'banana';
var num2 = 67;
new todo(num1,num2);