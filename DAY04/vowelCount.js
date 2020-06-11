var vowelCount = (function(string){
    var spy_string = /[a,e,i,o,u,y]/g; 
    var res = string.match(spy_string);
    return res.length;
});

console.log(
    vowelCount('hello')
    );

// var vowelCountRegx = (function(string){
    
// });

