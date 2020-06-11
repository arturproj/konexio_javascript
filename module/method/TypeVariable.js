const debug = require('./debug.js');

const isString = (function(x){
    return (typeof x === 'string' ?  true : false); 
});
const isInteger = (function(x){
    return (typeof x === 'number' ?  true : false); 
});
const isBoolean = (function(x){
    return ( x === 1 ?  true : false); 
});

// debug.log( isString('ciao') );
// debug.log( isInteger(1234) );
// debug.log( isBoolean(1) );

const toString = (function(x){
    x = String(x);
    return (typeof x === 'string' ? x : false); 
});
const toInteger = (function(x){
    x = Number(x);
    return (typeof x === 'number' ?  Number(x) : false); 
});
const toBoolean = (function(x){
    return (typeof x === 1 ?  true : false); 
});

// debug.info( toString(102242) );
// debug.info( toInteger('102242') );
// debug.info( toBoolean(0) );

module.exports = {
    isString,
    isInteger,
    isBoolean,

    toString,
    toInteger,
    toBoolean,
};