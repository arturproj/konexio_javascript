var wordCount = (function(string){
    string = string.split(" ");
    return string.length;
});

console.log(
    wordCount('hello world')
    );


    console.log(
        wordCount('one 22 three')
        );
    