// Challenge
// Créer le fichier exOh.js

// En utilisant JavaScript, utiliser une fonction exOh(str) qui prend en paramètre str et retourne true s’il y a un nombre égale de x et de o, 
// sinon la fonction retournera false. Seul ces 2 lettres seront entrées dans le string, pas de ponctuations, pas de nombres.

// Exemple :

// si str est égale à “xooxxxxooxo”, alors la fonction retournera false car il y a 6 x et 5 o
// Echantillon de tests
// Input:“xooxxo”

// Output:“true”

// Input:“x”

// Output:“false”

// Indice
// Vous pouvez écrire une boucle qui garde le compte pour chaque lettre et vérifier à la fin s’ils sont égaux.

var exOh = (function(string){
    var list = {
        x: 0,
        y:0,
        get getX() {
            return this.x;
        },
        get getY() {
            return this.y;
        },
    }; 

    list.x = string.match(/x/gi).length;
    list.y = string.match(/o/gi).length;

    console.log('x :',list.getX);
    console.log('o :',list.getY);
    return ( list.x === list.y ?  true : false);
});

console.log(
    exOh('xooxxxxooxo')
    );
