// Beta*
var crypto = require('crypto');

var crypter = {
    encode : function(string,secret,method){        
        var mykey = crypto.createCipher(method, secret);
        var mystr = mykey.update(string, 'utf8', 'hex')
        mystr += mykey.final('hex');
        
        console.log(mystr); //34feb914c099df25794bf9ccb85bea72
    },
    decode : function(string,secret,method){
        var mykey = crypto.createDecipher(method, secret);
        var mystr = mykey.update(string, 'hex', 'utf8')
        mystr += mykey.final('utf8');

        console.log(mystr); //abc
    }
};
 
crypter.encode('abc','mypassword','aes-128-cbc');
crypter.decode('34feb914c099df25794bf9ccb85bea72','mypassword','aes-128-cbc');


//module.exports = crypter;








