var debug = require('../module/debug.js');

var timeConvert = (function(x){
    if( parseInt(x) ){
        var hours = Math.floor(parseInt(x) / 60 / 60);
        var minutes = Math.floor(parseInt(x) / 60) - (hours * 60);
        var seconds = parseInt(x) % 60;      
    }
    return hours + ':' + minutes + ':' + seconds;
});

debug.info( timeConvert(126) );
debug.info( timeConvert(3700) );