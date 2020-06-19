// Challenge
// Créer un fichier letterCountRepeat.js.

// En Javascript, créer une fonction letterCountRepeat(str)qui prend en paramètre str 
// et qui retournera le premier mot avec le plus de lettres répétées. 
// Par exemple : Today, is the greatest day ever! devrait retourner greatest parce qu’il a un nombre répété de lettres avec 2 e (et 2 t) 
// et il est devant ever qui a aussi 2 e. Si il n’y a pas d’autres mot qui ont des lettres répétés, la fonction retournera -1. 
// Les mots seront séparés par des espaces.

// Echantillon de tests
// Input:“Hello apple pie”

// Output:“Hello”

// Input:“No words”

// Output:-1

var vowelCount = function(string){
    var matchString = [...string];var res = [];
    matchString.forEach((item, i) => {
        let spy_string =  new RegExp(item, 'gi');
        let marchItem = string.match(spy_string);
        res[item]=marchItem.length;
    });
    return res;
};

var letterCountRepeat = function (string) {
    string = string.split(" ");var res = [];
    string.forEach((item) => {
        if( !res.includes(item) ){
            let validate = vowelCount(item);  
            Object.keys(validate).forEach(val => {
                if ( validate[val] > 1 ){ res.push(item) }
            });
        }
    });
    
    return res;
};

console.log(
    letterCountRepeat('Hello apple pie Hello apple pie')
);