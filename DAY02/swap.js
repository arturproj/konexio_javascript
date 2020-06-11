var debug = require('../module/method/debug.js');

var swap = (function(x,y){
    return [y,x];        
});
var swap_1 = (function(x,y){
        x = [y][y = x, 0];
            return [x,y];        
});
var swap_2 = (function(array){
    return [array[1],array[0]];        
});
var swap_3 = (function(arraya){
    array[0] = [array[1]][array[1] = array[0], 0];
        return array;        
});
debug.info( swap(4,8) );

