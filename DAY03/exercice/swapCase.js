// Challenge
// En JavaScript, créer une fonction swapCase(str) qui prend en paramètre str et retournera la string avec la casse inversée pour chaque caractère. 
// Par exemple si str est égale à Hello World la valeur retournée devrait être hELLO wORLD. On évitera de transformer les nombres et ponctuations.

// Challenge 2
// Utiliser le process.argv pour créer un programme qui récupère votre input et utilise cette fonction.

// Echantillon de tests
// Input:“Hello-LOL”

// Output:“hELLO-lol”

// Input:“Konexio Developer!”

// Output:“kONEXIO dEVELOPER!”

function swapCase(string){
    var alfa =      [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ ",..."abcdefghijklmnopqrstuvwxyz"];
    var reverse =   [..."abcdefghijklmnopqrstuvwxyz ",..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    string = [...string.toString()];
    string.forEach((cht, i) => {
        string[i] = reverse[alfa.indexOf(cht)];
        //console.log([cht,i,reverse[alfa.indexOf(cht)]])
    });
    return string.join('');
}


console.log(
    swapCase('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
)