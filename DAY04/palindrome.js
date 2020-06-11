var palindrome = (function (string) {
    console.log( string );
    string = string.split("");var spy_key = [];
    for (var key in string) {
        if(string[key] == ' '){spy_key[key]=1;string.splice(string.indexOf(string[key]),1);}else{spy_key[key]=0;}
        
    }var str = '';var k = 0;
    for(var i=string.length-1;i >= 0;i--){
        if(spy_key[k+1] != 0 ){str += ' '+string[i];}else{str += string[i];}
        k++;
    }
    return str;
});

console.log( palindrome('* never odd or even') );