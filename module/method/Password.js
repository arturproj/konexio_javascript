const debug = require('./debug.js');

const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
const allNumbers = [..."0123456789"];

const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
const baseString = [...allCapsAlpha,...allLowerAlpha];
const baseNumber = [...allNumbers];
const baseASCII = [...allUniqueChars];

const generator = (dbase, len) => {
   return [...Array(len)]
     .map(i => dbase[Math.random()*dbase.length|0])
     .join('');
};

var PasswordGen = {
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

debug.error(PasswordGen.Full(15));