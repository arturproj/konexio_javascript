var alphabetSoup = (function(string){
    string = string.split("").sort();
    return string.join('');
});

console.log(
        alphabetSoup('hello')
    );