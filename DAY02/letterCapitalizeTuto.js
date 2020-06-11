var debug = require('../module/method/debug.js');
//
var myStiring = "wHaT a WoNdErFuL wOrLd";
//
debug.done(myStiring);
//
debug.error('myStiring = myStiring.split(" ");');
//
myStiring = myStiring.split(" ");
//
debug.info(myStiring);
//
debug.error('var mySubString = myStiring[0];');
//

for (var key in myStiring) {
    //
    debug.done("array myString["+key+"] : "+myStiring[key]);
    //
    var mySubString = myStiring[key];
    //
    debug.info(mySubString);
    //
    debug.error('mySubString = mySubString.toLowerCase();');
    //
    mySubString = mySubString.toLowerCase();
    //
    debug.info(mySubString);
    //
    debug.error('var myFirstletter = mySubString.charAt(0);');
    //
    var myFirstletter = mySubString.charAt(0);
    //
    debug.info(myFirstletter);
    //
    debug.error('myFirstletter = myFirstletter.toUpperCase();');
    //
    myFirstletter = myFirstletter.toUpperCase();
    //
    debug.info(myFirstletter);
    //
    debug.error('myStiring['+key+'] = myFirstletter + mySubString.substring(1);');
    //
    myStiring[key] = myFirstletter + mySubString.substring(1);
    //
    debug.info(myStiring[key]);    
    
}
debug.error('myStiring = myStiring.join(" ");');

debug.done( myStiring.join(" ") );    