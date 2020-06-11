var debug = require('../module/method/debug.js');

var letterCapitalize = {
    sam : (function(string){
        debug.info(string.length);
        string = string.toLowerCase().split(" ");
        for (var key in string) {
            //debug.info(string[key].charAt(0).toUpperCase());
            //debug.info(string[key].substring(1));
            string[key]= string[key].charAt(0).toUpperCase() + string[key].substring(1);        
        }
        
        return string.join(" ");        
    }),
    avn : (function(string){
        debug.info(string.length);
        string = string.toLowerCase().split(" ");
        for (var key in string) {
            if(string[key].length > 1){
                //debug.info(string[key].charAt(0).toUpperCase());
                //debug.info(string[key].substring(1));
                string[key]= string[key].charAt(0).toUpperCase() + string[key].substring(1); 
            }            
        }        
        return string.join(" ");       
    }),
}; 

debug.done( letterCapitalize.sam("wHaT a WoNdErFuL wOrLd") );
debug.done( letterCapitalize.avn("wHaT A WoNdErFuL wOrLd") );