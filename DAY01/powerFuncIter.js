var debug = require('../module/method/debug.js');

class todo {
    constructor(n1,n2) {
        // if check 'is number' ?
        if( parseInt(n1) && parseInt(n2) ){
            var res = Math.pow(parseInt(n1), parseInt(n2)) ;
            debug.info('math.pow ('+n1+', '+n2+'): '+res);              
        }else{
            debug.error('I burned a clock because of you');
        }          
    }
}
var num1 = 2;
var num2 = 2;
new todo(num1,num2);
debug.done('////////////=================');    
var num1 = 67;
var num2 = 1;
new todo(num1,num2);
debug.done('////////////=================');    
var num1 = 370;
var num2 = 67;
new todo(num1,num2);
debug.done('////////////=================');    
var num1 = 'banana';
var num2 = 67;
new todo(num1,num2);