var debug = require('../../module/method/debug.js');

// Challenge
// Créer un fichier checkNums.js

// En utilisant le language JavaScript, écrire une fonction checkNums(num1, num2) prenant deux nombres en argument, et qui retournera la string:

// num1 is greater than num2, si num1 est plus grand que num2
// num1 is lower than num2, si num1 est plus petit que num2.
// equal, si num1 et num2 sont égaux.
// Echantillons de tests
// Input: num1 = 3, num2 = 122

// Output: “num1 is lower than num2”

// Input: num1 = 67, num2 = 67

// Output: “equal”

// Indice
// Cet exercice ne requiert que très peu de conditions.


var ckeckNums = (function(n1,n2) {
        // if check 'is number' ?
        if( parseFloat(n1) && parseFloat(n2) ){
            if(parseFloat(n1) > parseFloat(n2)){
                debug.info(`${n1} is greater than ${n2}`);
            }else if(parseFloat(n1) < parseFloat(n2)){
                debug.info(`${n1} is lower than ${n2}`);
            }else{
                debug.info(`${n1} equal ${n2}`);
            }
        }else{
            debug.error('I burned a clock because of you');
        }    
    });
var num1 = 3;
var num2 = 122;
ckeckNums(num1,num2);
debug.done('////////////=================');    
var num1 = 67;
var num2 = 67;
ckeckNums(num1,num2);
debug.done('////////////=================');    
var num1 = 370;
var num2 = 67;
ckeckNums(num1,num2);
debug.done('////////////=================');    
var num1 = 'banana';
var num2 = 67;
ckeckNums(num1,num2);