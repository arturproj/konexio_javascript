const debug = require('./debug.js');

const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
const allNumbers = [..."0123456789"];

const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
const baseString = [...allCapsAlpha,...allLowerAlpha];
const baseNumber = [...allNumbers];
const baseASCII = [...allUniqueChars];

const generator = (dbase, len, res='') => {    
    for( var i = 0;i<len;i++){
        res += dbase[Math.random()*dbase.length|0]; 
    }
    return res;
};

const PasswordGen = {
    Number : (function (len = 8) {
        return generator(baseNumber, len)
    }),
    String : (function (len = 8) {
        return generator(baseString, len)
    }),
    ASCII : (function (len = 8) {
        return generator(baseASCII, len)
    }),
    Full : (function (len = 8) {
        return generator(base, len)
    }),
};

debug.info(allCapsAlpha);
// debug.info(base);
// debug.info(baseASCII);
// debug.info(baseString);
// debug.info(baseNumber);
// debug.done('');
// debug.done(base[Math.random()*base.length|0]);
// debug.done('');
// debug.error(PasswordGen.Full(15));