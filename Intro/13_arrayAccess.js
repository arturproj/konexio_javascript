var debug = require('../module/method/debug.js');

class todo {
    constructor(foods) {
        // forEach Array
/*         foods.forEach((myItemInArray) => {
            console.log('my Item In Array: ',myItemInArray); 
        }); */
/*         foods.forEach((myItem, myIndex) => {
            console.log('my Item In Array: ',myIndex+ ' | ' +myItem); 
        }); */
/*         foods.forEach((myItem, myIndex,myMap) => {
            console.log('my Index In Array: ',myIndex); 
            console.log('my Item In Array: ',myItem); 
            console.log('my Map In Array: ',myMap); 
        }); */
        //debug.error('////////////=================');
        // forEach key in Array
/*         for (var key in foods) {
            debug.info('for food ['+key+'] : '+foods[key]);
        } */
        //debug.error('////////////=================');
        // forEach key,food in Object Array
/*         for (const [key, food] of Object.entries(foods)) {
            debug.info('foreach obj : food ['+key+'] : '+food); 
        } */
        //debug.error('////////////=================');
        // for basic Array
        for( var i = 0;i<foods.length;i++){
            debug.info('for food : '+foods[i]); 
        }
        debug.error('////////////=================');
        debug.done('for food : '+foods[1]);
         
    }
}
var foods = ['apple', 'croissant', 'pear'];
new todo(foods);
