// Challenge
// En utilisant JavaScript, créer une fonction letterChange(str) qui prend en paramètre 
// un string qui retournera un string modifié en suivant l’algorithme suivant. 

// Remplacer chaque lettre dans le string avec la lettre qui la suit dans l’alphabet (ex : c devient d et z devient a). 
// Ensuite mettre en capital chaque voyelle dans le nouveau string.

// Echantillon de tests
// Input:“hello*3”

// Output:“Ifmmp*3”

// Input:“fun times!”

// Output:“gvO Ujnft!”
function codeGen(sh,alfa){
    var i = 0;var k = alfa.indexOf(sh);var req = [];
    while( i < alfa.length ){
        if(k==alfa.length) {k=0;}
        req.push(alfa[k]);
        k++;i++;
    }
    return req;
}

function letterChange(string){
    var alfa = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var reverse = codeGen('b',alfa);
    string = [...string.toString()];
    string.forEach((cht, i) => {
        if( alfa.includes(cht) ){ 
            string[i] = reverse[alfa.indexOf(cht)];  
        }
    });
    return string.join('');
}
var myArgs = process.argv.slice(2);

console.log(
    letterChange(myArgs[0])
);