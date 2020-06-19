// Challenge
// Créer un fichier rot13.js.

// Utiliser Javascript pour créer une fonction rot13(str) qui prend pour paramètre un string str et retourne une chaîne de 
// caractères où chaque lettre sera remplacée par la lettre placée 13 caractères plus loin dans l’alphabet.

// Le a devient n.

// Si on arrive à la fin de l’alphabet, on repart du début.

// Le z devient m.

// Les majuscules restent des majuscules, les minuscules restent des minuscules.

// Z devient M.

// Challenge 2
// Créer un fichier rot13program.js.

// Le paramètre devra être reçu par le terminal process.argv

// Echantillon de tests
// Input	Output
// abc	nop
// My horse is Amazing.	Zl ubefr vf Nznmvat.
// AkjhZ zLKIJz , 23y	NxwuM mYXVWm , 23l

function rot13(string){
    var alfa =      [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ ",..."abcdefghijklmnopqrstuvwxyz",..."0123456789"];
    var reverse =   [..."NOPQRSTUVWXYZABCDEFGHIJKLM ",..."nopqrstuvwxyzabcdefghijklm",..."0123456789"];
    string = [...string.toString()];
    string.forEach((cht, i) => {
        string[i] = reverse[alfa.indexOf(cht)];
    });
    return string.join('');
}


console.log(
    rot13('AkjhZ zLKIJz , 23y')
)