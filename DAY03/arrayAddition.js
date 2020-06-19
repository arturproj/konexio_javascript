var debug = require('../module/method/debug.js');

var arrayAddition = (function (array) {
    var pr_list = array.sort(function(a, b){return a-b});
    var xf_list = pr_list[(pr_list.length-1)];
    pr_list.splice(pr_list.indexOf(xf_list), 1);

    var rs_list = 0;
    for (var key in pr_list) {
        rs_list += pr_list[key];
        if( rs_list == xf_list ) break;
    }     
    return  ( rs_list == xf_list ) ? true : false;
});

var list = [1,2,3,12,6,5,5,8];

console.log( 
    arrayAddition(list)
);
var list = [1,2,3,12,6];

console.log( 
    arrayAddition(list)
);
