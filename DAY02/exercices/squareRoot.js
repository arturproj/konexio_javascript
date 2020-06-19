const debug = require('../../module/method/debug.js');
const Math = require('../../module/method/Math.js');


var squareRoot = (function(num) {
    return Math.sqrt(num);
});

debug.info(
    squareRoot(25)
);

debug.info(
    squareRoot(16)
);